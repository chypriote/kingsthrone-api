"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenownedMerchant = void 0;
const GoatResource_1 = require("../../GoatResource");
class RenownedMerchant extends GoatResource_1.GoatResource {
    //anniversaryPullInWishTree = LoginRewards
    //anniversaryPullInWishTree.vip_rwd = Continual Top-up
    //anniversaryPullInGift = limited Offers
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1231Info': [] }, 'rsn': '1qktiqatatr' });
        return data.a.anniversaryPullIn;
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
}
exports.RenownedMerchant = RenownedMerchant;
