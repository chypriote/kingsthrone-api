"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllianceSiege = void 0;
const GoatResource_1 = require("../../GoatResource");
class AllianceSiege extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ kuaCLubBattle: { getInfo: [] } });
        return data.a.kuaCLubBattle;
    }
    async attackWall(count = 1) {
        const data = await this.request({ kuaCLubBattle: { play: { type: 2, uid: 0, num: count } } });
        return data.a.type;
    }
    async attackGeneral(count = 1) {
        const data = await this.request({ kuaCLubBattle: { play: { type: 3, uid: 0, num: count } } });
        return data.a.type;
    }
    async attackMember(uid, count = 1) {
        await this.request({ kuaCLubBattle: { play: { type: 4, uid: uid, num: count } } });
    }
    async claimTaskReward(id) {
        await this.request({ kuaCLubBattle: { getTaskRewards: { id: id } } });
    }
    async buySiegeWeapon(count = 1) {
        await this.request({ kuaCLubBattle: { buyBattleNum: { num: count } } });
    }
    async buyDailyShop(id) {
        await this.request({ kuaCLubBattle: { dayShopBuy: { num: 1, id: id } } });
    }
    async buyClassicShop(id) {
        await this.request({ kuaCLubBattle: { shopBuy: { num: 1, id: 5 } } });
    }
}
exports.AllianceSiege = AllianceSiege;
