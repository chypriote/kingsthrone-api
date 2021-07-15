import { Goat } from './goat';
export declare const LOGIN_ACCOUNT_NAPOLEON: LoginData;
interface LoginData {
    rsn: string;
    login: {
        loginAccount: {
            parm1: string;
            platform: string;
            parm2: string;
            parm6: string;
            parm3: string;
            openkey: string;
            openid: string;
        };
    };
}
export declare class GoatResource {
    _goat: Goat;
    _data: string | null;
    constructor(goat: Goat);
    _jsonResponseHandler(response: any): Promise<any>;
    private _makeParams;
    private _makeHeaders;
    private _retry;
    private _request;
    login(user: LoginData): Promise<void>;
    protected request(data?: any): Promise<any>;
}
export {};
