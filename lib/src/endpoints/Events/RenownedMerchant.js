"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenownedMerchant = void 0;
const GoatResource_1 = require("../../GoatResource");
class RenownedMerchant extends GoatResource_1.GoatResource {
    //anniversaryPullInWishTree = LoginRewards
    //anniversaryPullInWishTree.vip_rwd = Continual Top-up
    //anniversaryPullInGift = limited Offers
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1231Info': [] }, 'rsn': '7xyylgclpsy' });
        return {
            renownedMerchant: data.a.anniversaryPullIn,
            cherishedWish: data.a.anniversaryPullInWishTree,
            continualTopUp: data.a.czhuodong.anniversaryPullInDay,
        };
    }
    async getRanking() {
        const data = await this.request({ 'huodong2': { 'hd1231Rank': [] }, 'rsn': '6sxwksgklxb' });
        return data.a.anniversaryPullIn;
    }
    async buyEmblem(count = 1) {
        await this.request({ 'huodong2': { 'hd1231Buy': { 'id': count } }, 'rsn': '7xycpxgyggl' });
    }
    async useEmblem(count = 1) {
        await this.request({ 'huodong2': { 'hd1231Wish': { 'id': count } }, 'rsn': '7ycldcsgxgp' });
    }
    async buyExchangeItem(id, count = 1) {
        await this.request({ 'huodong2': { 'hd1245Exchange': { 'num': count, 'id': id } }, 'rsn': '4cimibhxhb' });
    }
    /** Login Rewards */
    async loginRewardsInfo() {
        const data = await this.request({ 'huodong2': { 'hd1231Info': [] }, 'rsn': '5ywwhyywrpe' });
        return data.a.anniversaryPullInWeekly;
    }
    async getTaskReward(day, type) {
        await this.request({ 'huodong2': { 'hd1243GetTaskReward': { 'day': day, 'type': type } }, 'rsn': '8maaommajkk' });
    }
    /** Wish tree */
    async wishTreeInfos() {
        const data = await this.request({ 'huodong2': { 'hd1209Info': [] }, 'rsn': '7ycclycpvyp' });
        return data.a.anniversaryPullInWishTree;
    }
    async setWishTreeReward(id, day, pos) {
        await this.request({ 'huodong2': { 'hd1209SelectRwd': { 'type': 0, 'pos': pos, 'dc': day, 'id': id } }, 'rsn': '1tbbtuqbwa' });
    }
    async getWishTreeReward(type) {
        await this.request({ 'huodong2': { 'hd1209Rwd': { 'type': type } }, 'rsn': '1kttuktrwua' });
    }
    /** Top Up */
    async continualTopUpInfos() {
        const data = await this.request({ 'huodong2': { 'hd1246Info': [] }, 'rsn': '1tbbttuuau' });
        return data.a.czhuodong.anniversaryPullInDay;
    }
    async getContinualTopUp() {
        await this.request({ 'huodong2': { 'hd1246GetBox': [] }, 'rsn': '1tbbttuuau' });
    }
}
exports.RenownedMerchant = RenownedMerchant;
