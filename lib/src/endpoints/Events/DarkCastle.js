"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkCastle = void 0;
const GoatResource_1 = require("../../GoatResource");
class DarkCastle extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd1020Info: [] } });
        return data.a.wshuodong;
    }
    async getRanking() {
        const data = await this.request({ huodong: { hd1020Rank: [] } });
        return data.a.wshuodong.wslist;
    }
}
exports.DarkCastle = DarkCastle;
