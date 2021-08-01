"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KingsPass = void 0;
const GoatResource_1 = require("../../GoatResource");
class KingsPass extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd1086Info: [] } });
        return {
            shop: data.a.warOrderShop.shop,
            pass: data.a.warOrder,
        };
    }
    async claimLevel(id) {
        await this.request({ huodong: { hd1086getrwd: { type: 0, id: id } } });
    }
    async claimAllLevels() {
        await this.request({ huodong: { hd1086getrwd: { type: 0, id: 0 } } });
    }
}
exports.KingsPass = KingsPass;
