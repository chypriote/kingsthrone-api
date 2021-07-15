"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maidens = void 0;
const GoatResource_1 = require("../GoatResource");
class Maidens extends GoatResource_1.GoatResource {
    async visitRandomMaiden() {
        const visit = await this.request({ 'wife': { 'sjxo': [] }, 'rsn': '9rzrtbtsrs' });
        return visit.u.wife.wifeList[0];
    }
    async useStaminaDraught(num = 1) {
        const items = await this.request({ 'wife': { 'weige': { num } }, 'rsn': '3zhwezreeef' });
        return {
            items: items.u.item.itemList[0],
            status: items.a.wife.jingLi,
        };
    }
    async getAvailableVisits() {
        const next = await this.request({ 'user': { 'refwife': [] }, 'rsn': '9zrimzcbbis' });
        return next.a.wife.jingLi;
    }
}
exports.Maidens = Maidens;
