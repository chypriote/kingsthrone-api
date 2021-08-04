"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenetianPass = void 0;
const GoatResource_1 = require("../../GoatResource");
class VenetianPass extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong2: { hd1241Info: [] } });
        return {
            shop: data.a.anniversaryPullInWarOrderShop.shop,
            pass: data.a.anniversaryPullInWarOrder,
        };
    }
    async claimLevel(id) {
        await this.request({ huodong2: { hd1241getrwd: { type: 0, id: id } } });
    }
    async claimAllLevels() {
        await this.request({ huodong2: { hd1241getrwd: { type: 0, id: 0 } } });
    }
    async buyShopItem(id) {
        await this.request({ huodong2: { hd1241BoxExchange: { num: 1, id: id } } });
    }
}
exports.VenetianPass = VenetianPass;
