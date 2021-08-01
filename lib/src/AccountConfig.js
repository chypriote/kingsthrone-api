"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountConfig = void 0;
class AccountConfig {
    constructor(gid, server, token) {
        this._token = null;
        this._gid = gid;
        this._server = server;
        this._token = token;
    }
    getLoginConfig() {
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
        };
    }
    get gid() {
        return this._gid;
    }
    set gid(gid) {
        this._gid = gid;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get server() {
        return this._server;
    }
    set server(server) {
        this._server = server;
    }
    get token() {
        return this._token;
    }
    set token(value) {
        this._token = value;
    }
}
exports.AccountConfig = AccountConfig;
