"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XSIntimacy = void 0;
const GoatResource_1 = require("../../GoatResource");
class XSIntimacy extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd314Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async getRankings() {
        const data = await this.request({ 'huodong': { 'hd314UserRank': [] } });
        return data.a.kuacbhuodong;
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 314, id: id } } });
    }
}
exports.XSIntimacy = XSIntimacy;
