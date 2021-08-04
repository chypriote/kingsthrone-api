"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonSlaying = void 0;
const GoatResource_1 = require("../../GoatResource");
class DragonSlaying extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd298Info: [] } });
        return data.a.newyear;
    }
    async slay(id) {
        await this.request({ huodong: { hd1028Task: { id: id } } });
    }
}
exports.DragonSlaying = DragonSlaying;
