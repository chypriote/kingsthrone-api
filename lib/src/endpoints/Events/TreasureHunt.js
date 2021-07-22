"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureHunt = void 0;
const GoatResource_1 = require("../../GoatResource");
class TreasureHunt extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd296Info': [] }, 'rsn': '2myqxxhaxab' });
        return data.a.wbhuodong.wabao;
    }
    async claimAllShovels() {
        for (let i = 1; i < 15; i++) {
            await this.request({ 'huodong': { 'hd296Task': { 'id': i } }, 'rsn': '5wpwwyhwhf' });
        }
    }
    async claimShovel(id) {
        await this.request({ 'huodong': { 'hd296Task': { 'id': id } }, 'rsn': '5wpwwyhwhf' });
    }
    async dig() {
        await this.request({ 'huodong': { 'hd296Wa': [] }, 'rsn': '5wpwwyhjyy' });
    }
}
exports.TreasureHunt = TreasureHunt;
