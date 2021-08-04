"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JewelsOfLuck = void 0;
const GoatResource_1 = require("../../GoatResource");
class JewelsOfLuck extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd1081Info: [] } });
        return data.a.blackMarket;
    }
    async play(num) {
        const data = await this.request({ huodong: { hd1081Chou: { num: num } } });
        return data.a.blackMarket.win;
    }
    async buyJewel(num) {
        await this.request({ huodong: { hd1081Buy: { num: num } } });
    }
}
exports.JewelsOfLuck = JewelsOfLuck;
