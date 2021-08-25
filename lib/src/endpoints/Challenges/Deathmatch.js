"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deathmatch = void 0;
const GoatResource_1 = require("../../GoatResource");
class Deathmatch extends GoatResource_1.GoatResource {
    async dmGetTourneyInfos() {
        const data = await this.request({ kuayamen: { jdComeHd: [] } });
        return data.a.jdyamen;
    }
    async dmStartTourneyFight() {
        await this.request({ kuayamen: { jdSjtz: [] } });
        const data = await this.request({ kuayamen: { jdPiZhun: [] } });
        return data.a.jdyamen;
    }
    async dmStartTokenTourneyFight() {
        const data = await this.request({ kuayamen: { jdChushi: [] } });
        return data.a.jdyamen;
    }
    async dmBuyTourneyBoost(item) {
        const data = await this.request({ kuayamen: { jdSeladd: { id: item.id } } });
        return data.a.jdyamen;
    }
    async dmFightHero(hero) {
        const data = await this.request({ kuayamen: { jdFight: { id: hero.id } } });
        return data.a.jdyamen;
    }
    async dmGetReward() {
        const data = await this.request({ kuayamen: { jdGetrwd: [] } });
        return data.a.jdyamen.win.rwd;
    }
    async dmChallengeOpponent(uid, hid) {
        const data = await this.request({ kuayamen: { jdZhuiSha: { fuid: uid, hid: hid } } });
        return data.a.jdyamen;
    }
    async dmGetRankings() {
        const data = await this.request({ kuayamen: { jdGetRank: { type: 1 } } });
        return data.a.jdyamen;
    }
}
exports.Deathmatch = Deathmatch;
