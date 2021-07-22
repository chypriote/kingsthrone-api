"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XServerTourney = void 0;
const GoatResource_1 = require("../../GoatResource");
class XServerTourney extends GoatResource_1.GoatResource {
    async xsGetTourneyInfos() {
        const data = await this.request({ 'kuayamen': { 'yamen': [] }, 'rsn': '2malnlahyqq' });
        return data.a.kuayamen;
    }
    async xsStartTourneyFight() {
        const data = await this.request({ 'kuayamen': { 'pizun': [] }, 'rsn': '3esphksnsn' });
        return data.a.kuayamen;
    }
    async xsStartTokenTourneyFight() {
        const data = await this.request({ 'kuayamen': { 'chushi': [] }, 'rsn': '3espeerwpw' });
        return data.a.kuayamen;
    }
    async xsBuyTourneyBoost(item) {
        const data = await this.request({ 'kuayamen': { 'seladd': { 'id': item.id } }, 'rsn': '5wfrarhwer' });
        return data.a.kuayamen;
    }
    async xsFightHero(hero) {
        const data = await this.request({ 'kuayamen': { 'fight': { 'id': hero.id } }, 'rsn': '6wgklkbxkx' });
        return data.a.kuayamen;
    }
    async xsGetReward() {
        const data = await this.request({ 'kuayamen': { 'getrwd': [] }, 'rsn': '2axhlhqxbh' });
        return data.a.kuayamen.win.rwd;
    }
    async xsChallengeOpponent(uid, hid) {
        const data = await this.request({ 'kuayamen': { 'zhuisha': { 'fuid': uid, 'hid': hid } }, 'rsn': '5yavaehwer' });
        return data.a.kuayamen;
    }
    async xsGetTourneyReward(id) {
        try {
            await this.request({ 'yamen': { 'getdilyrwd': { id } }, 'rsn': '5yawyvphhr' });
            return true;
        }
        catch (e) { /*We want to ignore completely*/
        }
        return false;
    }
}
exports.XServerTourney = XServerTourney;
