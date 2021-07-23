"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlessedChest = void 0;
const GoatResource_1 = require("../../GoatResource");
class BlessedChest extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1276Info': [] }, 'rsn': '4afcvvagfiv' });
        return data.a.continuousRechargeBox;
    }
}
exports.BlessedChest = BlessedChest;
