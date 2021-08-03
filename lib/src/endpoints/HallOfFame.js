"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HallOfFame = void 0;
const GoatResource_1 = require("../GoatResource");
class HallOfFame extends GoatResource_1.GoatResource {
    async getHoFInfo() {
        const data = await this.request({ huanggong: { getNewInfo: [] } });
        return data.a.huanggong.Info;
    }
    async getHoFTitle() {
        const data = await this.request({ huanggong: { getInfoByWid: { wid: 2 } } });
        return data.a.huanggong.widInfo;
    }
    async payHomage() {
        await this.request({ huanggong: { qingAn: { fuid: 699002934, chenghao: 2 } } });
    }
    async claimHomage() {
        await this.request({ chenghao: { wyrwd: [] } });
    }
}
exports.HallOfFame = HallOfFame;
