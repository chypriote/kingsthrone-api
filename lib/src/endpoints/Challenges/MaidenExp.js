"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaidenExp = void 0;
const GoatResource_1 = require("../../GoatResource");
class MaidenExp extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd1075Info': [] }, 'rsn': '9rnnmcjjji' });
        return data.a.cbhuodong;
    }
    async claimProgressReward(id) {
        await this.request({ 'huodong': { 'hdCbGetRwd': { 'huodongId': 1075, 'id': id } }, 'rsn': '4cimihaiff' });
    }
}
exports.MaidenExp = MaidenExp;
