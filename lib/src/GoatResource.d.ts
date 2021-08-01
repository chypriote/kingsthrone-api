import { Goat } from './goat';
export interface IAccount {
    rsn: string;
    login: {
        loginAccount: {
            platform: string;
            openkey: string;
            openid: string;
        };
    };
}
export declare class GoatResource {
    _goat: Goat;
    _data: string | null;
    constructor(goat: Goat);
    private static _getErrorMessage;
    private _jsonResponseHandler;
    private _makeParams;
    private _makeHeaders;
    private _retry;
    private _request;
    private _login;
    protected request(data?: any): Promise<any>;
    _unsafe(data: any): Promise<any>;
}
