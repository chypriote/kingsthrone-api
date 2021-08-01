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
			this._goat.version = response.a.system.version.ver
			await this._login(true)
			return await this._retry(RETRY_REASON.VERSION)
		}

		if (msg) {
			if (msg === 'You have logged in elsewhere') {
				await this._login(true)
				return await this._retry(RETRY_REASON.LOGIN)
			}
			if (msg === 'Login expired, please login again') {
				await this._login(true)
				return await this._retry(RETRY_REASON.LOGIN)
			}
			if (msg === `Error: server_is_busyuser_${this._goat.gid}`) {
				return await this._retry(RETRY_REASON.SERVER_BUSY)
			}

			throw new Error(msg)
		}

		this._data = null

		return response
	}
	private _makeParams(): any {
		return {
			sevid: this._goat.server,
			ver: this._goat.version,
			uid: this._goat.isLoggedIn ? this._goat.gid : '',
			token: this._goat.isLoggedIn ? this._goat.token : '',
			platform: 'gaotukc',
			lang: 'en',
		}
	}
	private _makeHeaders(): any {
		return {
			'Accept-Encoding': 'identity',
			'Content-Type': 'application/x-www-form-urlencoded',
			'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.1; ONEPLUS A5000 Build/NMF26X)',
			Host: this._goat.host,
			Cookie: this._goat.cookie,
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
				.post(this._goat.baseUrl, JSON.stringify({ ...data, rsn: uid.randomUUID() }), {
					params: this._makeParams(),
					headers: this._makeHeaders(),
				})
				.then((response) => response.data)
		}

		return await makeRequest(data)
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

	private async _login(reconnect = false): Promise<void> {
		if (this._goat.token && !reconnect) {
			return
		}

		this._goat._logout()
		const response = await this._request(this._goat.config.getLoginConfig())

		if (!response?.a?.loginMod) {
			throw new Error(`LoginError: ${response?.a?.system?.errror.msg}`)
		}

		this._goat.login = response.a.loginMod.loginAccount
	}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	public async _unsafe(data: any): Promise<any> {
		return await this._request(data)
	}
}
