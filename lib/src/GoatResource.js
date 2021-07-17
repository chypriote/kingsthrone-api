"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoatResource = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
require('dotenv').config();
const axios_1 = require("axios");
class GoatResource {
    constructor(goat) {
        this._data = null;
        this._goat = goat;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async _jsonResponseHandler(response) {
        var _a, _b, _c, _d, _e, _f;
        if ((_b = (_a = response === null || response === void 0 ? void 0 : response.a) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.errror) {
            if (response.a.system.errror.msg === 'You have logged in elsewhere') {
                console.warn('Provided token expired, reconnecting');
                await this._login(true);
                return await this._retry();
            }
            throw new Error(((_d = (_c = response === null || response === void 0 ? void 0 : response.a) === null || _c === void 0 ? void 0 : _c.system) === null || _d === void 0 ? void 0 : _d.errror.msg) || JSON.stringify(response));
        }
        if ((_f = (_e = response === null || response === void 0 ? void 0 : response.a) === null || _e === void 0 ? void 0 : _e.system) === null || _f === void 0 ? void 0 : _f.version) {
            this._goat._setVersion(response.a.system.version.ver);
            return await this._retry();
        }
        this._data = null;
        return response;
    }
    _makeParams() {
        return {
            sevid: this._goat._getServer(),
            ver: this._goat._getVersion(),
            uid: this._goat.isLoggedIn ? this._goat._getGid() : '',
            token: this._goat.isLoggedIn ? this._goat._getToken() : '',
            platform: 'gaotukc',
            lang: 'en',
        };
    }
    _makeHeaders() {
        return {
            'Accept-Encoding': 'identity',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.1; ONEPLUS A5000 Build/NMF26X)',
            'Host': this._goat._getHost(),
            'Cookie': this._goat._getCookie(),
            'Connection': 'Keep-Alive',
        };
    }
    async _retry() {
        if (!this._data) {
            throw new Error('Nothing to retry');
        }
        return await this._request(this._data);
    }
    async _request(data = null) {
        const makeRequest = async (data) => {
            return await axios_1.default.post(this._goat._getBaseUrl(), data, {
                params: this._makeParams(),
                headers: this._makeHeaders(),
            }).then(response => response.data);
        };
        return await makeRequest(JSON.stringify(data || {}));
    }
    async _login(reconnect = false) {
        var _a, _b, _c;
        const user = this._goat._getAccount();
        //prevent relogin on gautier
        if (user.rsn === '2ylxannmqx' && process.env.TOKEN && !reconnect) {
            this._goat._setToken(process.env.TOKEN);
            this._goat._setGid('699002934');
            return;
        }
        this._goat._logout();
        const response = await this._request(user);
        if (!((_a = response === null || response === void 0 ? void 0 : response.a) === null || _a === void 0 ? void 0 : _a.loginMod)) {
            throw new Error(`LoginError: ${(_c = (_b = response === null || response === void 0 ? void 0 : response.a) === null || _b === void 0 ? void 0 : _b.system) === null || _c === void 0 ? void 0 : _c.errror.msg}`);
        }
        this._goat._login(response.a.loginMod.loginAccount);
    }
    async request(data = null) {
        if (!this._data) {
            this._data = data;
        }
        if (!this._goat.isLoggedIn) {
            await this._login();
        }
        return await this._jsonResponseHandler(await this._request(data));
    }
}
exports.GoatResource = GoatResource;