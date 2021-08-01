export interface LoginConfig {
	login: {
		loginAccount: {
			platform: string
			parm1: string
			parm2: string
			parm3: string
			parm6: string
			openkey: string
			openid: string
		}
	}
}

export interface GoatConfig {
	_name: string
	_server: string
	_gid: string
	_token: string | null

	readonly openid: string
	readonly openkey: string

	getLoginConfig(): LoginConfig
}

export class AccountConfig implements GoatConfig {
	_name: string
	_server: string
	_gid: string
	_token: string | null = null

	readonly openid: string
	readonly openkey: string

	constructor(gid: string, server: string, token?: string) {
		this._gid = gid
		this._server = server
		this._token = token
	}

	public getLoginConfig(): LoginConfig {
		return {
			login: {
				loginAccount: {
					platform: 'gaotukc',
					parm1: 'WIFI',
					parm2: 'GooglePlay',
					parm3: 'ONEPLUS A5000',
					parm6: '4c4fbcab-ab57-3f8c-8447-f675203edc15',
					openid: this.openid,
					openkey: this.openkey,
				},
			},
		}
	}

	get gid(): string {
		return this._gid
	}
	set gid(gid: string) {
		this._gid = gid
	}
	get name(): string {
		return this._name
	}
	set name(name: string) {
		this._name = name
	}
	get server(): string {
		return this._server
	}
	set server(server: string) {
		this._server = server
	}
	get token(): string | null {
		return this._token
	}
	set token(value: string | null) {
		this._token = value
	}
}
