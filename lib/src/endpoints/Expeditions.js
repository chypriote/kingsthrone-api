"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expeditions = void 0;
const GoatResource_1 = require("../GoatResource");
const lodash_1 = require("lodash");
class Expeditions extends GoatResource_1.GoatResource {
    //Merchant ventures
    async getMerchantStatus() {
        const data = await this.request({ silkroad: { trade: [] } });
        return data.a.trade.Info;
    }
    async doMerchantVentures(count) {
        if (!count) {
            return;
        }
        await this.request({ silkroad: { rootPlay: { gid: count } } });
    }
    //Expeditions
    async getExpeditionsStatus() {
        const data = await this.request({ taofa: { taofa: [] } });
        return data.a.taofa.playInfo;
    }
    async doExpeditions(count) {
        const data = await this.request({ taofa: { rootPlay: { gid: count } } });
        return data.a.taofa.playInfo;
    }
    async doExpedition(id) {
        const data = await this.request({ taofa: { play: { id } } });
        return data.a.taofa.playInfo;
    }
    //Kingdom Expeditions
    async getKingdomExpStatus() {
        const data = await this.request({ huodong: { hd1268Info: [] } });
        return data.a.kingdomExpedition.info;
    }
    async doKingdomExpedition(level) {
        const heroes = lodash_1.orderBy((await this._goat.profile.getGameInfos()).hero.heroList, 'zfight_num', 'desc');
        const heros = [];
        for (let i = 1; i < 6; i++) {
            heros.push({ pos: i, power: 999999999, hid: heroes[i - 1].id });
        }
        const data = await this.request({ huodong: { hd1268Play: { heros: heroes, id: level } } });
        return data.a.kingdomExpedition.info;
    }
    async claimKingdomExpReward(id) {
        await this.request({ huodong: { hd1268getPhaRwd: { id: id } } });
    }
    async claimKingdomFirstReward(id) {
        await this.request({ huodong: { hd1268FirstAllRwd: { id: id } } });
    }
    async claimKingdomMyReward(id) {
        await this.request({ huodong: { hd1268FirstRwd: { id: id } } });
    }
}
exports.Expeditions = Expeditions;
