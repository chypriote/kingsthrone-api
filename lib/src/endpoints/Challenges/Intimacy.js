"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intimacy = void 0;
const GoatResource_1 = require("../../GoatResource");
class Intimacy extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd253Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 253, id: id } } });
    }
}
exports.Intimacy = Intimacy;
