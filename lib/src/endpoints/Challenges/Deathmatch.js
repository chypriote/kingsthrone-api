"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deathmatch = void 0;
const GoatResource_1 = require("../../GoatResource");
class Deathmatch extends GoatResource_1.GoatResource {
    async dmGetTourneyInfos() {
        const data = await this.request({ 'kuayamen': { 'jdComeHd': [] }, 'rsn': '3esswfnhew' });
        return data.a.jdyamen;
    }
    async dmStartTourneyFight() {
        await this.request({ 'kuayamen': { 'jdSjtz': [] }, 'rsn': '1qtwwrwewku' });
        const data = await this.request({ 'kuayamen': { 'jdPiZhun': [] }, 'rsn': '6xllkgklyg' });
        return data.a.jdyamen;
    }
    async dmStartTokenTourneyFight() {
        const data = await this.request({ 'kuayamen': { 'jdChushi': [] }, 'rsn': '4cmxxihghg' });
        return data.a.jdyamen;
    }
    async dmBuyTourneyBoost(item) {
        const data = await this.request({ 'kuayamen': { 'jdSeladd': { 'id': item.id } }, 'rsn': '7yddpollxv' });
        return data.a.jdyamen;
    }
    async dmFightHero(hero) {
        const data = await this.request({ 'kuayamen': { 'jdFight': { 'id': hero.id } }, 'rsn': '2yllhnqywb' });
        return data.a.jdyamen;
    }
    async dmGetReward() {
        const data = await this.request({ 'kuayamen': { 'jdGetrwd': [] }, 'rsn': '5wfaaypfer' });
        return data.a.jdyamen.win.rwd;
    }
    async dmChallengeOpponent(uid, hid) {
        const data = await this.request({ 'kuayamen': { 'jdZhuiSha': { 'fuid': uid, 'hid': hid } }, 'rsn': '7xcddslcgvg' });
        return data.a.jdyamen;
    }
    async dmGetRankings() {
        const data = await this.request({ 'kuayamen': { 'jdGetRank': { 'type': 1 } }, 'rsn': '3zeppnfzhse' });
        return data.a.jdyamen;
    }
}
exports.Deathmatch = Deathmatch;
