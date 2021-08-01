"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenownedMerchant = void 0;
const GoatResource_1 = require("../../GoatResource");
class RenownedMerchant extends GoatResource_1.GoatResource {
    //anniversaryPullInWishTree = LoginRewards
    //anniversaryPullInWishTree.vip_rwd = Continual Top-up
    //anniversaryPullInGift = limited Offers
    async eventInfos() {
        const data = await this.request({ huodong2: { hd1231Info: [] } });
        return {
            renownedMerchant: data.a.anniversaryPullIn,
            cherishedWish: data.a.anniversaryPullInWishTree,
            continualTopUp: data.a.czhuodong.anniversaryPullInDay,
        };
    }
    async getRanking() {
        const data = await this.request({ huodong2: { hd1231Rank: [] } });
        return data.a.anniversaryPullIn;
    }
    async buyEmblem(count = 1) {
        await this.request({ huodong2: { hd1231Buy: { id: count } } });
    }
    async useEmblem(count = 1) {
        await this.request({ huodong2: { hd1231Wish: { id: count } } });
    }
    async buyExchangeItem(id, count = 1) {
        await this.request({ huodong2: { hd1245Exchange: { num: count, id: id } } });
    }
    /** Login Rewards */
    async loginRewardsInfo() {
        const data = await this.request({ huodong2: { hd1231Info: [] } });
        return data.a.anniversaryPullInWeekly;
    }
    async getTaskReward(day, type) {
        await this.request({ huodong2: { hd1243GetTaskReward: { day: day, type: type } } });
    }
    /** Wish tree */
    async wishTreeInfos() {
        const data = await this.request({ huodong2: { hd1209Info: [] } });
        return data.a.anniversaryPullInWishTree;
    }
    async setWishTreeReward(id, day, pos, type) {
        await this.request({ huodong2: { hd1209SelectRwd: { type: type, pos: pos, dc: day, id: id } } });
    }
    async getWishTreeReward(type) {
        await this.request({ huodong2: { hd1209Rwd: { type: type } } });
    }
    /** Top Up */
    async continualTopUpInfos() {
        const data = await this.request({ huodong2: { hd1246Info: [] } });
        return data.a.czhuodong.anniversaryPullInDay;
    }
    async getContinualTopUp() {
        await this.request({ huodong2: { hd1246GetBox: [] } });
    }
}
exports.RenownedMerchant = RenownedMerchant;
