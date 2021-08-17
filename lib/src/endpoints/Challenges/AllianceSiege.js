"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllianceSiege = void 0;
const GoatResource_1 = require("../../GoatResource");
class AllianceSiege extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 4: { getInfo: [] } });
        return data.a.kuaCLubBattle;
    }
    async attackWall(count = 1) {
        const data = await this.request({ 4: { play: { type: 2, uid: 0, num: count } } });
        return data.a.type;
    }
    async attackGeneral(count = 1) {
        const data = await this.request({ 4: { play: { type: 3, uid: 0, num: count } } });
        return data.a.type;
    }
    async attackMember(uid, count = 1) {
        await this.request({ 4: { play: { type: 4, uid: uid, num: count } } });
    }
    async claimTaskReward(id) {
        await this.request({ 4: { getTaskRewards: { id: id } } });
    }
    async buySiegeWeapon(count = 1) {
        await this.request({ 4: { buyBattleNum: { num: count } } });
    }
    async buyDailyShop(id) {
        await this.request({ 4: { dayShopBuy: { num: 1, id: id } } });
    }
    async buyClassicShop(id) {
        await this.request({ 4: { shopBuy: { num: 1, id: 5 } } });
    }
}
exports.AllianceSiege = AllianceSiege;
