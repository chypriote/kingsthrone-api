"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeoplesMonarch = void 0;
const GoatResource_1 = require("../../GoatResource");
class PeoplesMonarch extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd282Info: [] } });
        return data.a.penalize;
    }
    async buyShopItem(id) {
        await this.request({ huodong: { hd282buy: { id: id } } });
    }
    async useItem(id) {
        await this.request({ huodong: { hd282play: { id: id } } });
    }
    async exchangeItem(id) {
        await this.request({ huodong: { hd282exchange: { id: id } } });
    }
}
exports.PeoplesMonarch = PeoplesMonarch;
