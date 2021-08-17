"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIYStore = void 0;
const GoatResource_1 = require("../../GoatResource");
class DIYStore extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1156Info': [] } });
        return data.a.optionalPack;
    }
    async setPackItem(pos, id, pack) {
        await this.request({ 'huodong2': { 'hd1156SelectRwd': { 'pos': pos, 'dc': pack, 'id': id } } });
    }
}
exports.DIYStore = DIYStore;
