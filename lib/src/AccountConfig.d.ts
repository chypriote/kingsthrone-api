export interface LoginConfig {
    login: {
        loginAccount: {
            platform: string;
            parm1: string;
            parm2: string;
            parm3: string;
            parm6: string;
            openkey: string;
            openid: string;
        };
    };
}
export interface GoatConfig {
    _name: string;
    _server: string;
    _gid: string;
    _token: string | null;
    readonly openid: string;
    readonly openkey: string;
    getLoginConfig(): LoginConfig;
}
export declare class AccountConfig implements GoatConfig {
    _name: string;
    _server: string;
    _gid: string;
    _token: string | null;
    readonly openid: string;
    readonly openkey: string;
    constructor(gid: string, server: string, token?: string);
    getLoginConfig(): LoginConfig;
    get gid(): string;
    set gid(gid: string);
    get name(): string;
    set name(name: string);
    get server(): string;
    set server(server: string);
    get token(): string | null;
    set token(value: string | null);
}
