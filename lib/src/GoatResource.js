"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoatResource = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
require('dotenv').config();
const axios_1 = require("axios");
const demophlos_1 = require("./accounts/demophlos");
class GoatResource {
    constructor(goat) {
        this._data = null;
        this._goat = goat;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async _jsonResponseHandler(response, requestData) {
        var _a, _b, _c, _d, _e, _f;
        if ((_b = (_a = response === null || response === void 0 ? void 0 : response.a) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.errror) {
            if (response.a.system.errror.msg === 'You have logged in elsewhere') {
                return await this.login(requestData, true);
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
            if (!this._data) {
                this._data = data;
            }
            return await axios_1.default.post(this._goat._getBaseUrl(), data, {
                params: this._makeParams(),
                headers: this._makeHeaders(),
            }).then(response => response.data);
        };
        return await makeRequest(JSON.stringify(data || {}));
    }
    async login(user, reconnect = false) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        //prevent relogin on gautier
        if (user.rsn === '2ylxannmqx' && process.env.TOKEN && !reconnect) {
            this._goat._setToken(process.env.TOKEN);
            this._goat._setGid('699002934');
            return;
        }
        const response = await this._request(user);
        if (!((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.a) === null || _a === void 0 ? void 0 : _a.loginMod) === null || _b === void 0 ? void 0 : _b.loginAccount) === null || _c === void 0 ? void 0 : _c.token)) {
            console.error(`LoginError: ${(_e = (_d = response === null || response === void 0 ? void 0 : response.a) === null || _d === void 0 ? void 0 : _d.system) === null || _e === void 0 ? void 0 : _e.errror.msg}`);
        }
        this._goat._setToken((_h = (_g = (_f = response === null || response === void 0 ? void 0 : response.a) === null || _f === void 0 ? void 0 : _f.loginMod) === null || _g === void 0 ? void 0 : _g.loginAccount) === null || _h === void 0 ? void 0 : _h.token);
        this._goat._setGid((_l = (_k = (_j = response === null || response === void 0 ? void 0 : response.a) === null || _j === void 0 ? void 0 : _j.loginMod) === null || _k === void 0 ? void 0 : _k.loginAccount) === null || _l === void 0 ? void 0 : _l.uid.toString());
        console.warn(`Logged in on ${this._goat._getServer()} as ${this._goat._getGid()}`);
    }
    async request(data = null) {
        if (!this._goat.isLoggedIn) {
            await this.login(demophlos_1.ACCOUNT_NAPOLEON);
        }
        const response = await this._request(data);
        return await this._jsonResponseHandler(response, data);
    }
}
exports.GoatResource = GoatResource;
