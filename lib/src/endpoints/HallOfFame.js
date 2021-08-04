"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HallOfFame = void 0;
const GoatResource_1 = require("../GoatResource");
const HallOfFame_1 = require("../../types/HallOfFame");
class HallOfFame extends GoatResource_1.GoatResource {
    async getHoFInfo() {
        const data = await this.request({ huanggong: { getNewInfo: [] } });
        return data.a.huanggong.Info;
    }
    async getHoFTitle(title) {
        const data = await this.request({ huanggong: { getInfoByWid: { wid: title } } });
        return data.a.huanggong.widInfo;
    }
    async payHomage(uid, title = HallOfFame_1.HOF_TITLE.MIGHT) {
        await this.request({ huanggong: { qingAn: { fuid: uid, chenghao: title } } });
    }
    async claimHomage() {
        await this.request({ chenghao: { wyrwd: [] } });
    }
}
exports.HallOfFame = HallOfFame;
