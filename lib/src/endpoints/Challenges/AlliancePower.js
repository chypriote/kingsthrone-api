"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlliancePower = void 0;
const GoatResource_1 = require("../../GoatResource");
class AlliancePower extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd310Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 310, id: id } } });
    }
}
exports.AlliancePower = AlliancePower;
