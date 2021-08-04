"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quality = void 0;
const GoatResource_1 = require("../../GoatResource");
class Quality extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd1078Info: [] } });
        return data.a.cbhuodong;
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 1078, id: id } } });
    }
}
exports.Quality = Quality;
