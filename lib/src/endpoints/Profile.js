"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const GoatResource_1 = require("../GoatResource");
const lodash_1 = require("lodash");
class Profile extends GoatResource_1.GoatResource {
    async getGameInfos() {
        if (this.gameInfos) {
            return this.gameInfos;
        }
        const game = await this.request({ rsn: '2ynbmhanlb', guide: { login: { language: 1, platform: 'gaotukc', ug: '' } } });
        this.gameInfos = lodash_1.cloneDeep(game.a);
        return this.gameInfos;
    }
    async getAllLevies() {
        try {
            await this.request({ 'user': { 'jingYingAll': [] }, 'rsn': '1tabbiiurr' });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async getAllDecreesResources(type) {
        try {
            const data = await this.request({ 'user': { 'yjZhengWu': { 'act': type } }, 'rsn': '1tabbiitbi' });
            return !!data.a.msgwin;
        }
        catch (e) {
            return false;
        }
    }
    async finishTraining() {
        try {
            await this.request({ 'rsn': '9zrimzjntjm', 'school': { 'allover': [] } });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async startTraining() {
        await this.request({ 'rsn': '6wguulskgy', 'school': { 'allstart': [] } });
    }
    async visitCouncil() {
        const data = await this.request({ 'rsn': '4fcgffigihv', 'hanlin': { 'comein': { 'fuid': this._goat._getGid() } } });
        return data.a.hanlin;
    }
    async hostCouncil(num = 3) {
        await this.request({ 'rsn': '3eseehnzfw', 'hanlin': { 'opendesk': { num, 'isPush': 1 } } });
    }
    async punishPrisoner() {
        const data = await this.request({ 'rsn': '9rsnniccct', 'laofang': { 'bianDa': { 'type': 1 } } });
        return data.a.laofang;
    }
    async getUser(gid) {
        var _a, _b;
        const profile = await this.request({ user: { getFuserMember: { id: gid } }, rsn: '1taquiwekk' });
        if ((_b = (_a = profile === null || profile === void 0 ? void 0 : profile.a) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.errror) {
            return null;
        }
        return profile.a.user.fuser;
    }
}
exports.Profile = Profile;
