"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tourney = void 0;
const GoatResource_1 = require("../../GoatResource");
class Tourney extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd254Info': [] } });
        return data.a.cbhuodong;
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 254, id: id } } });
    }
}
exports.Tourney = Tourney;
