"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlliancePurchase = void 0;
const GoatResource_1 = require("../../GoatResource");
class AlliancePurchase extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd445Info: [] } });
        return data.a.bhczhuodong;
    }
    async claimReward(day, id) {
        await this.request({ huodong: { hd445Rwd: { day: day, id: id } } });
    }
}
exports.AlliancePurchase = AlliancePurchase;
