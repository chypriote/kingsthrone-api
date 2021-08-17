"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Charm = void 0;
const GoatResource_1 = require("../../GoatResource");
class Charm extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd258Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 258, id: id } } });
    }
}
exports.Charm = Charm;
