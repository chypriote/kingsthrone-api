"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grain = void 0;
const GoatResource_1 = require("../../GoatResource");
class Grain extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd259Info': [] }, 'rsn': '8maoxakixvm' });
        return data.a.cbhuodong;
    }
    async claimProgressReward(id) {
        await this.request({ 'huodong': { 'hdCbGetRwd': { 'huodongId': 259, 'id': id } }, 'rsn': '4cimihaiff' });
    }
}
exports.Grain = Grain;