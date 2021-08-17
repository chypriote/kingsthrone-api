"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RareBeasts = void 0;
const GoatResource_1 = require("../../GoatResource");
class RareBeasts extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd1098Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 1098, id: id } } });
    }
}
exports.RareBeasts = RareBeasts;
