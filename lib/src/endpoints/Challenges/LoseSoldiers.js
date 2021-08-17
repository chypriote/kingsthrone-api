"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoseSoldiers = void 0;
const GoatResource_1 = require("../../GoatResource");
class LoseSoldiers extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd257Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 257, id: id } } });
    }
}
exports.LoseSoldiers = LoseSoldiers;
