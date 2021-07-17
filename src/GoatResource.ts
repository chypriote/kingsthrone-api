/* eslint-disable @typescript-eslint/no-explicit-any */
require('dotenv').config()
import axios from 'axios'
import { Goat } from './goat'
import { ACCOUNT_NAPOLEON } from './accounts/demophlos'

export interface IAccount {
	rsn: string
	login: {
		loginAccount: {
			parm1: string
			platform: string
			parm2: string
			parm6: string
			parm3: string
			openkey: string
			openid: string
		}
	}
}

export class GoatResource {
	_goat: Goat
	_data: string|null = null

	constructor(goat: Goat) {
		this._goat = goat
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	private async _jsonResponseHandler(response: any): Promise<any> {
		if (response?.a?.system?.errror) {
			if (response.a.system.errror.msg === 'You have logged in elsewhere') {
				console.warn('Provided token expired, reconnecting')
				await this._login(true)
				return await this._retry()
			}
			throw new Error(response?.a?.system?.errror.msg || JSON.stringify(response))
		}
		if (response?.a?.system?.version) {
			this._goat._setVersion(response.a.system.version.ver)
			return await this._retry()
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
			'Host': this._goat._getHost(),
			'Cookie': this._goat._getCookie(),
			'Connection': 'Keep-Alive',
		}
	}
	private async _retry (): Promise<any> {
		if (!this._data) { throw new Error('Nothing to retry') }
		return await this._request(this._data)
	}
	private async _request(data: any = null): Promise<any> {
		const makeRequest = async (data: string) => {

			return await axios.post(
				this._goat._getBaseUrl(),
				data,
				{
					params: this._makeParams(),
					headers: this._makeHeaders(),
				}).then(response => response.data)
		}

		return await makeRequest(JSON.stringify(data || {}))
	}
	private async _login(reconnect: boolean = false): Promise<void> {
		const user = this._goat._getAccount()

		//prevent relogin on gautier
		if (user.rsn === '2ylxannmqx' && process.env.TOKEN && !reconnect) {
			this._goat._setToken(process.env.TOKEN)
			this._goat._setGid('699002934')
			return
		}

		this._goat._logout()
		const response = await this._request(user)

		if (!response?.a?.loginMod) {
			 throw new Error(`LoginError: ${response?.a?.system?.errror.msg}`)
		}

		this._goat._login(response.a.loginMod.loginAccount)
	}

	protected async request(data: any = null): Promise<any> {
		if (!this._data) {this._data = data}
		if (!this._goat.isLoggedIn) { await this._login() }
		return await this._jsonResponseHandler(await this._request(data))
	}
}
