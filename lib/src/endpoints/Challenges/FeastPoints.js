"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeastPoints = void 0;
const GoatResource_1 = require("../../GoatResource");
class FeastPoints extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd256Info: [] } });
        return { ...data.a.jiulou, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 256, id: id } } });
    }
}
exports.FeastPoints = FeastPoints;
