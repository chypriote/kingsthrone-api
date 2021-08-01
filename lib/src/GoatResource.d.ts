import { Goat } from './goat';
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
    protected request(data?: any): Promise<any>;
    private _login;
    _unsafe(data: any): Promise<any>;
}
