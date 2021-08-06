"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaiseChildren = void 0;
const GoatResource_1 = require("../../GoatResource");
class RaiseChildren extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd311Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 311, id: id } } });
    }
}
exports.RaiseChildren = RaiseChildren;
