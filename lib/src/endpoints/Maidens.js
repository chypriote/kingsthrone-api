"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maidens = void 0;
const GoatResource_1 = require("../GoatResource");
class Maidens extends GoatResource_1.GoatResource {
    async visitRandomMaiden() {
        const visit = await this.request({ wife: { sjxo: [] } });
        return visit.u.wife.wifeList[0];
    }
    async useStaminaDraught(num = 1) {
        const items = await this.request({ wife: { weige: { num } } });
        return {
            items: items.u.item.itemList[0],
            status: items.a.wife.jingLi,
        };
    }
    async getAvailableVisits() {
        const next = await this.request({ user: { refwife: [] } });
        return next.a.wife.jingLi;
    }
    async payVisit(id) {
        const visit = await this.request({ wife: { xxoo: { id: id } } });
        return visit.u.wife.wifeList[0];
    }
}
exports.Maidens = Maidens;
