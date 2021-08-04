"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XServerTourney = void 0;
const GoatResource_1 = require("../../GoatResource");
class XServerTourney extends GoatResource_1.GoatResource {
    async xsGetTourneyInfos() {
        const data = await this.request({ kuayamen: { yamen: [] } });
        return data.a.kuayamen;
    }
    async xsStartTourneyFight() {
        const data = await this.request({ kuayamen: { pizun: [] } });
        return data.a.kuayamen;
    }
    async xsStartTokenTourneyFight() {
        const data = await this.request({ kuayamen: { chushi: [] } });
        return data.a.kuayamen;
    }
    async xsBuyTourneyBoost(item) {
        const data = await this.request({ kuayamen: { seladd: { id: item.id } } });
        return data.a.kuayamen;
    }
    async xsFightHero(hero) {
        const data = await this.request({ kuayamen: { fight: { id: hero.id } } });
        return data.a.kuayamen;
    }
    async xsGetReward() {
        const data = await this.request({ kuayamen: { getrwd: [] } });
        return data.a.kuayamen.win.rwd;
    }
    async xsChallengeOpponent(uid, hid) {
        const data = await this.request({ kuayamen: { zhuisha: { fuid: uid, hid: hid } } });
        return data.a.kuayamen;
    }
    async xsGetTourneyReward(id) {
        try {
            await this.request({ yamen: { getdilyrwd: { id } } });
            return true;
        }
        catch (e) { /*We want to ignore completely*/ }
        return false;
    }
    async xsGetRankings() {
        const data = await this.request({ kuayamen: { getRank: { type: 1 } } });
        return data.a.kuayamen;
    }
}
exports.XServerTourney = XServerTourney;
