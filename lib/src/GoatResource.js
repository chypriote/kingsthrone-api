"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoatResource = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
require('dotenv').config();
const axios_1 = require("axios");
const short_unique_id_1 = require("short-unique-id");
const uid = new short_unique_id_1.default({
    dictionary: 'alphanum_lower',
    length: 10,
});
var RETRY_REASON;
(function (RETRY_REASON) {
    RETRY_REASON[RETRY_REASON["LOGIN"] = 0] = "LOGIN";
    RETRY_REASON[RETRY_REASON["VERSION"] = 1] = "VERSION";
    RETRY_REASON[RETRY_REASON["SERVER_BUSY"] = 2] = "SERVER_BUSY";
})(RETRY_REASON || (RETRY_REASON = {}));
class GoatResource {
    constructor(goat) {
        this._data = null;
        this._goat = goat;
    }
    static _getErrorMessage(response) {
        var _a, _b, _c;
        if ((_b = (_a = response === null || response === void 0 ? void 0 : response.a) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.errror) {
            return response.a.system.errror.msg;
        }
        if ((_c = response === null || response === void 0 ? void 0 : response.system) === null || _c === void 0 ? void 0 : _c.errror) {
            return response.system.errror.msg;
        }
        return null;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async _jsonResponseHandler(response) {
        var _a, _b;
        const msg = GoatResource._getErrorMessage(response);
        if ((_b = (_a = response === null || response === void 0 ? void 0 : response.a) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.version) {
            this._goat.version = response.a.system.version.ver;
            await this._login(true);
            return await this._retry(RETRY_REASON.VERSION);
        }
        if (msg) {
            if (msg === 'You have logged in elsewhere') {
                await this._login(true);
                return await this._retry(RETRY_REASON.LOGIN);
            }
            if (msg === 'Login expired, please login again') {
                await this._login(true);
                return await this._retry(RETRY_REASON.LOGIN);
            }
            if (msg === `Error: server_is_busyuser_${this._goat.gid}`) {
                return await this._retry(RETRY_REASON.SERVER_BUSY);
            }
            throw new Error(msg);
        }
        this._data = null;
        return response;
    }
    _makeParams() {
        return {
            sevid: this._goat.server,
            ver: this._goat.version,
            uid: this._goat.isLoggedIn ? this._goat.gid : '',
            token: this._goat.isLoggedIn ? this._goat.token : '',
            platform: 'gaotukc',
            lang: 'en',
        };
    }
    _makeHeaders() {
        return {
            'Accept-Encoding': 'identity',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 7.1.1; ONEPLUS A5000 Build/NMF26X)',
            Host: this._goat.host,
            Cookie: this._goat.cookie,
            Connection: 'Keep-Alive',
        };
    }
    async _retry(reason = null) {
        if (!this._data) {
            throw new Error(`${reason}: Nothing to retry`);
        }
        return await this._request(this._data);
    }
    async _request(data = null) {
        const makeRequest = async (data) => {
            return await axios_1.default
                .post(this._goat.baseUrl, JSON.stringify({ ...data, rsn: uid.randomUUID() }), {
                params: this._makeParams(),
                headers: this._makeHeaders(),
            })
                .then((response) => response.data);
        };
        return await makeRequest(data);
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
    async _login(reconnect = false) {
        var _a, _b, _c;
        if (this._goat.token && !reconnect) {
            return;
        }
        this._goat._logout();
        const response = await this._request(this._goat.config.getLoginConfig());
        if (!((_a = response === null || response === void 0 ? void 0 : response.a) === null || _a === void 0 ? void 0 : _a.loginMod)) {
            throw new Error(`LoginError: ${(_c = (_b = response === null || response === void 0 ? void 0 : response.a) === null || _b === void 0 ? void 0 : _b.system) === null || _c === void 0 ? void 0 : _c.errror.msg}`);
        }
        this._goat.login = response.a.loginMod.loginAccount;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async _unsafe(data) {
        return await this._request(data);
    }
}
exports.GoatResource = GoatResource;
