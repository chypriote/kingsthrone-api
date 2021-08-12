"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FortunasBlessing = void 0;
const GoatResource_1 = require("../../GoatResource");
class FortunasBlessing extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd1122Info': [] } });
        return data.a.newyear;
    }
}
exports.FortunasBlessing = FortunasBlessing;
