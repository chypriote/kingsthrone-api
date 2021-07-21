"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GardenStroll = void 0;
const GoatResource_1 = require("../../GoatResource");
class GardenStroll extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd336Info': [] }, 'rsn': '8jmaoekjmvm' });
        return data.a.xjhuodong.xijiao;
    }
    async getRanking() {
        const data = await this.request({ 'huodong': { 'hd336KuaRank': [] }, 'rsn': '2yaqnxywnqx' });
        return data.a.xjhuodong.xjkualist;
    }
    async getShop() {
        const data = await this.request({ 'huodong': { 'hd336shop': [] }, 'rsn': '6wuxlxwbuk' });
        return data.u.xjhuodong.xijiao;
    }
}
exports.GardenStroll = GardenStroll;
