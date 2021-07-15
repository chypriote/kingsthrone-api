/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGoat } from './IGoat'

interface LoginData {
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

export interface GoatResource {
	_goat: IGoat
	_data: string|null

	_jsonResponseHandler(response: any): Promise<any>
	login(user: LoginData): Promise<void>
}

