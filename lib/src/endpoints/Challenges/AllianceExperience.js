"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllianceExperience = void 0;
const GoatResource_1 = require("../../GoatResource");
class AllianceExperience extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd250Info: [] } });
        return data.a.cbhuodong;
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 250, id: id } } });
    }
}
exports.AllianceExperience = AllianceExperience;
