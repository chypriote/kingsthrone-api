"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreasureHunt = void 0;
const GoatResource_1 = require("../../GoatResource");
class TreasureHunt extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd296Info: [] } });
        return data.a.wbhuodong.wabao;
    }
    async claimAllShovels() {
        for (let i = 1; i < 15; i++) {
            await this.request({ huodong: { hd296Task: { id: i } } });
        }
    }
    async claimShovel(id) {
        await this.request({ huodong: { hd296Task: { id: id } } });
    }
    async dig() {
        await this.request({ huodong: { hd296Wa: [] } });
    }
    async openChest(id) {
        await this.request({ huodong: { hd296Rwd: { id: id } } });
    }
}
exports.TreasureHunt = TreasureHunt;
