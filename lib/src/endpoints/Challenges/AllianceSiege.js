"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllianceSiege = void 0;
const GoatResource_1 = require("../../GoatResource");
class AllianceSiege extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'rsn': '5ywhevjahwy', 'kuaCLubBattle': { 'getInfo': [] } });
        return data.a.kuaCLubBattle;
    }
}
exports.AllianceSiege = AllianceSiege;
