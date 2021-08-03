"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllianceIntimacy = void 0;
const GoatResource_1 = require("../../GoatResource");
class AllianceIntimacy extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd312Info: [] } });
        return data.a.cbhuodong;
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 312, id: id } } });
    }
}
exports.AllianceIntimacy = AllianceIntimacy;
