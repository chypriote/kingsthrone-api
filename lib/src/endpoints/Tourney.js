"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tourney = void 0;
const GoatResource_1 = require("../GoatResource");
class Tourney extends GoatResource_1.GoatResource {
    async getTourneyInfos() {
        const data = await this.request({ yamen: { yamen: [] } });
        return data.a.yamen;
    }
    async getTourneyAdok() {
        const data = await this.request({ user: { adok: { label: 'yamen' } } });
        return data.a.warHorse;
    }
    async startTourneyFight() {
        const data = await this.request({ yamen: { pizun: [] } });
        return data.a.yamen;
    }
    async startTokenTourneyFight() {
        const data = await this.request({ yamen: { chushi: [] } });
        return data.a.yamen;
    }
    async buyTourneyBoost(item) {
        const data = await this.request({ yamen: { seladd: { id: item.id } } });
        return data.a.yamen;
    }
    async fightHero(hero) {
        const data = await this.request({ yamen: { fight: { id: hero.id } } });
        return data.a.yamen;
    }
    async getReward() {
        const data = await this.request({ yamen: { getrwd: [] } });
        return data.a.yamen.win.rwd;
    }
    async challengeOpponent(uid, hid) {
        const data = await this.request({ yamen: { zhuisha: { fuid: uid, hid: hid } } });
        return data.a.yamen;
    }
    async getTourneyReward(id) {
        try {
            await this.request({ yamen: { getdilyrwd: { id } } });
            return true;
        }
        catch (e) {
            /*We want to ignore completely*/
        }
        return false;
    }
}
exports.Tourney = Tourney;
