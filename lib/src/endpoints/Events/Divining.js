"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divining = void 0;
const GoatResource_1 = require("../../GoatResource");
class Divining extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd1123Info: [] } });
        return data.a.Astrology;
    }
    async selectStarSign(id = 3) {
        await this.request({ huodong: { hd1123select: { id: id } } });
    }
    async stargaze() {
        await this.request({ huodong: { hd1123guanxing: [] } });
    }
    async buyGlobes(count = 1) {
        await this.request({ huodong: { hd1123BuyItem: { num: count } } });
    }
    async divine(count = 1) {
        await this.request({ huodong: { hd1123zhanxing: { num: count } } });
    }
    async getShopItem(id) {
        await this.request({ huodong: { hd1123Exchange: { num: 1, id: id } } });
    }
}
exports.Divining = Divining;
