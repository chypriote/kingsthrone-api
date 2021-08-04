"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HallOfFame = void 0;
const GoatResource_1 = require("../GoatResource");
const types_1 = require("../../types");
class HallOfFame extends GoatResource_1.GoatResource {
    async getHoFInfo() {
        const data = await this.request({ huanggong: { getNewInfo: [] } });
        return data.a.huanggong.Info;
    }
    async getHoFTitle(title) {
        const data = await this.request({ huanggong: { getInfoByWid: { wid: title } } });
        return data.a.huanggong.widInfo;
    }
    async payHomage(uid, title = types_1.TITLE.MIGHT) {
        await this.request({ huanggong: { qingAn: { fuid: uid, chenghao: title } } });
    }
    async claimHomage() {
        await this.request({ chenghao: { wyrwd: [] } });
    }
}
exports.HallOfFame = HallOfFame;
