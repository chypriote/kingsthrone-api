"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tourney = void 0;
const GoatResource_1 = require("../GoatResource");
class Tourney extends GoatResource_1.GoatResource {
    async getTourneyInfos() {
        const data = await this.request({ 'yamen': { 'yamen': [] }, 'rsn': '1qtiuqurtia' });
        return data.a.yamen;
    }
    async getTourneyAdok() {
        const data = await this.request({ 'user': { 'adok': { 'label': 'yamen' } }, 'rsn': '6swkbswywgg' });
        return data.a.warHorse;
    }
    async startTourneyFight() {
        const data = await this.request({ 'yamen': { 'pizun': [] }, 'rsn': '3esphksnsn' });
        return data.a.yamen;
    }
    async startTokenTourneyFight() {
        const data = await this.request({ 'yamen': { 'chushi': [] }, 'rsn': '3espeerwpw' });
        return data.a.yamen;
    }
    async buyTourneyBoost(item) {
        const data = await this.request({ 'yamen': { 'seladd': { id: item.id } }, 'rsn': '2ylqabmbqq' });
        return data.a.yamen;
    }
    async fightHero(hero) {
        const data = await this.request({ 'yamen': { 'fight': { 'id': hero.id } }, 'rsn': '3zhwpzzrphn' });
        return data.a.yamen;
    }
    async getReward() {
        const data = await this.request({ 'yamen': { 'getrwd': [] }, 'rsn': '1tabuiiqwa' });
        return data.a.yamen.win.rwd;
    }
    async challengeOpponent(uid, hid) {
        const data = await this.request({ 'yamen': { 'zhuisha': { 'fuid': uid, 'hid': hid } }, 'rsn': '8mxoaeekoe' });
        return data.a.yamen;
    }
    async getTourneyReward(id) {
        try {
            await this.request({ 'yamen': { 'getdilyrwd': { id } }, 'rsn': '5yawyvphhr' });
            return true;
        }
        catch (e) { /*We want to ignore completely*/
        }
        return false;
    }
}
exports.Tourney = Tourney;
