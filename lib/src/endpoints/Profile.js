"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const GoatResource_1 = require("../GoatResource");
const lodash_1 = require("lodash");
class Profile extends GoatResource_1.GoatResource {
    async getGameInfos(force = false) {
        if (!force && this.gameInfos) {
            return this.gameInfos;
        }
        const game = await this.request({ guide: { login: { language: 1, platform: 'gaotukc', ug: '' } } });
        this.gameInfos = lodash_1.cloneDeep(game.a);
        return this.gameInfos;
    }
    async finishTraining() {
        try {
            await this.request({ school: { allover: [] } });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async startTraining() {
        await this.request({ school: { allstart: [] } });
    }
    async sendTraining(id, dummy = 1) {
        await this.request({ school: { start: { id: dummy, hid: id } } });
    }
    async visitCouncil() {
        const data = await this.request({ hanlin: { comein: { fuid: this._goat.gid } } });
        return data.a.hanlin;
    }
    async hostCouncil(num = 3) {
        await this.request({ hanlin: { opendesk: { num, isPush: 1 } } });
    }
    async punishPrisoner() {
        const data = await this.request({ laofang: { bianDa: { type: 1 } } });
        return data.a.laofang;
    }
    async getUser(gid) {
        var _a, _b;
        const profile = await this.request({ user: { getFuserMember: { id: gid } } });
        if ((_b = (_a = profile === null || profile === void 0 ? void 0 : profile.a) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.errror) {
            return null;
        }
        return profile.a.user.fuser;
    }
    async levelUpKingdom() {
        await this.request({ user: { shengguan: [] } });
    }
}
exports.Profile = Profile;
