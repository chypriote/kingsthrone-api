/* eslint-disable @typescript-eslint/no-explicit-any */
require('dotenv').config()
import axios from 'axios'
import { Goat } from './goat'
import ShortUniqueId from 'short-unique-id'

const uid = new ShortUniqueId({
	dictionary: 'alphanum_lower',
	length: 10,
})
enum RETRY_REASON {
	LOGIN = 0,
	VERSION = 1,
	SERVER_BUSY = 2,
}
export interface IAccount {
	name: string
	login: {
		loginAccount: {
			platform: string
			// parm1: string
			// parm2: string
			// parm6: string
			// parm3: string
			openkey: string
			openid: string
		}
	}
}

export class GoatResource {
	_goat: Goat
	_data: string | null = null

	constructor(goat: Goat) {
		this._goat = goat
	}

	private static _getErrorMessage(response: any): string | null {
		if (response?.a?.system?.errror) {
			return response.a.system.errror.msg
		}
		if (response?.system?.errror) {
			return response.system.errror.msg
		}
		return null
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	private async _jsonResponseHandler(response: any): Promise<any> {
		const msg = GoatResource._getErrorMessage(response)

		if (response?.a?.system?.version) {
			this._goat._setVersion(response.a.system.version.ver)
			console.warn(`New version ${response.a.system.version.ver}`)
			return await this._retry(RETRY_REASON.VERSION)
		}

		if (msg) {
			if (msg === 'You have logged in elsewhere') {
				console.warn('Provided token expired, reconnecting')
				await this._login(true)
				return await this._retry(RETRY_REASON.LOGIN)
			}
			if (msg === 'Login expired, please login again') {
				await this._login(true)
				return await this._retry(RETRY_REASON.LOGIN)
			}
			if (msg.indexOf('server_is_busyuser') > -1) {
				return await this._retry(RETRY_REASON.SERVER_BUSY)
			}

			throw new Error(msg)
		}

		this._data = null

		return response
	}
	private _makeParams(): any {
		return {
			sevid: this._goat._getServer(),
			ver: this._goat._getVersion(),
			uid: this._goat.isLoggedIn ? this._goat._getGid() : '',
			token: this._goat.isLoggedIn ? this._goat._getToken() : '',
			platform: 'gaotukc',
			lang: 'en',
		}
	}
	private _makeHeaders(): any {
		return {
			'Accept-Encoding': 'identity',
			'Content-Type': 'application/x-www-form-urlencoded',
			'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.1; ONEPLUS A5000 Build/NMF26X)',
			Host: this._goat._getHost(),
			Cookie: this._goat._getCookie(),
			Connection: 'Keep-Alive',
		}
	}
	private async _retry(reason: RETRY_REASON | null = null): Promise<any> {
		if (!this._data) {
			throw new Error(`${reason}: Nothing to retry`)
		}
		return await this._request(this._data)
	}
	private async _request(data: any = null): Promise<any> {
		const makeRequest = async (data: Record<string, unknown>) => {
			return await axios
				.post(this._goat._getBaseUrl(), JSON.stringify({ ...data, rsn: uid.randomUUID() }), {
					params: this._makeParams(),
					headers: this._makeHeaders(),
				})
				.then((response) => response.data)
		}

		return await makeRequest(data)
	}
	private async _login(reconnect = false): Promise<void> {
		const user = this._goat._getAccount()

		//prevent relogin on gautier
		if (process.env.TOKEN && !reconnect) {
			this._goat._setToken(process.env.TOKEN)
			this._goat._setGid('699005053')
			return
		}

		this._goat._logout()
		const response = await this._request(user)

		if (response?.a?.system?.version) {
			this._goat._setVersion(response.a.system.version.ver)
			return await this._login(true)
		}
		if (!response?.a?.loginMod) {
			throw new Error(`LoginError: ${response?.a?.system?.errror.msg}`)
		}

		this._goat._login(response.a.loginMod.loginAccount)
	}

	protected async request(data: any = null): Promise<any> {
		if (!this._data) {
			this._data = data
		}
		if (!this._goat.isLoggedIn) {
			await this._login()
		}
		return await this._jsonResponseHandler(await this._request(data))
	}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public async _unsafe(data: any): Promise<any> {
		return await this._request(data)
	}
}
