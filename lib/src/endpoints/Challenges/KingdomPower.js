"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KingdomPower = void 0;
const GoatResource_1 = require("../../GoatResource");
class KingdomPower extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd252Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 252, id: id } } });
    }
}
exports.KingdomPower = KingdomPower;
