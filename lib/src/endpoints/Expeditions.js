"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expeditions = void 0;
const GoatResource_1 = require("../GoatResource");
class Expeditions extends GoatResource_1.GoatResource {
    //Merchant ventures
    async getMerchantStatus() {
        const data = await this.request({ 'silkroad': { 'trade': [] } });
        return data.a.trade.Info;
    }
    async doMerchantVentures(count) {
        if (!count) {
            return;
        }
        await this.request({ 'silkroad': { 'rootPlay': { 'gid': count } } });
    }
    //Expeditions
    async getExpeditionsStatus() {
        const data = await this.request({ 'taofa': { 'taofa': [] } });
        return data.a.taofa.playInfo;
    }
    async doExpeditions(count) {
        const data = await this.request({ 'taofa': { 'rootPlay': { 'gid': count } } });
        return data.a.taofa.playInfo;
    }
    async doExpedition(id) {
        const data = await this.request({ 'taofa': { 'play': { id } } });
        return data.a.taofa.playInfo;
    }
    //Kingdom Expeditions
    async getKingdomExpStatus() {
        const data = await this.request({ 'huodong': { 'hd1268Info': [] } });
        return data.a.kingdomExpedition.info;
    }
    async doKingdomExpedition(level) {
        const heroes = [
            { 'pos': 1, 'power': 999999999, 'hid': 41 },
            { 'pos': 2, 'power': 999999999, 'hid': 3 },
            { 'pos': 3, 'power': 999999999, 'hid': 8 },
            { 'pos': 4, 'power': 999999999, 'hid': 58 },
            { 'pos': 5, 'power': 999999999, 'hid': 52 },
        ];
        const data = await this.request({ 'huodong': { 'hd1268Play': { 'heros': heroes, 'id': level } } });
        return data.a.kingdomExpedition.info;
    }
    async claimKingdomExpReward(id) {
        await this.request({ 'huodong': { 'hd1268getPhaRwd': { 'id': id } } });
    }
    async claimKingdomFirstReward(id) {
        await this.request({ 'huodong': { 'hd1268FirstAllRwd': { 'id': id } } });
    }
    async claimKingdomMyReward(id) {
        await this.request({ 'huodong': { 'hd1268FirstRwd': { 'id': id } } });
    }
}
exports.Expeditions = Expeditions;
