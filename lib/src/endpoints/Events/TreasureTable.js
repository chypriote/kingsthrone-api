"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureTable = void 0;
const GoatResource_1 = require("../../GoatResource");
class TreasureTable extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd290Info': [] } });
        return data.a.zphuodong;
    }
    async spin(type, count) {
        await this.request({ 'huodong': { 'hd290Yao': { 'num': count, 'type': type } } });
    }
    async buySwords(type, count) {
        await this.request({ 'huodong': { 'hd290Buy': { 'num': count, 'type': type } } });
    }
}
exports.TreasureTable = TreasureTable;
