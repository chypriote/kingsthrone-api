"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpendGold = void 0;
const GoatResource_1 = require("../../GoatResource");
class SpendGold extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd255Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 255, id: id } } });
    }
}
exports.SpendGold = SpendGold;
