"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GardenStroll = void 0;
const GoatResource_1 = require("../../GoatResource");
class GardenStroll extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd336Info: [] } });
        return data.a.xjhuodong.xijiao;
    }
    async getRanking() {
        const data = await this.request({ huodong: { hd336KuaRank: [] } });
        return data.a.xjhuodong.xjkualist;
    }
    async getShop() {
        const data = await this.request({ huodong: { hd336shop: [] } });
        return data.u.xjhuodong.xijiao;
    }
    async buyBlossom(count) {
        await this.request({ huodong: { hd336Buy: { num: count } } });
    }
    async walk(count = 1) {
        await this.request({ huodong: { hd336Zou: { num: count, type: 0 } } });
    }
    async openChest(id) {
        await this.request({ huodong: { hd336Get: { id: id } } });
    }
}
exports.GardenStroll = GardenStroll;
