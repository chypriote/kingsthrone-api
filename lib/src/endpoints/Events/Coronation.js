"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coronation = void 0;
const GoatResource_1 = require("../../GoatResource");
class Coronation extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd280Info: [] } });
        return data.a.xghuodong;
    }
    async buyShopItem(id) {
        await this.request({ huodong: { hd280buy: { id: id } } });
    }
    async useItem(id) {
        await this.request({ huodong: { hd280play: { id: id } } });
    }
}
exports.Coronation = Coronation;
