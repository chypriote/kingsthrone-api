"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picnic = void 0;
const GoatResource_1 = require("../../GoatResource");
class Picnic extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd1028Info': [] }, 'rsn': '4ciccfcvff' });
        return data.a.gehuodong;
    }
    async claimQuest(id) {
        await this.request({ 'huodong': { 'hd1028Task': { 'id': id } }, 'rsn': '9zmtssbtjct' });
    }
    async getRankings() {
        const data = await this.request({ 'huodong': { 'hd1028Rank': [] }, 'rsn': '1qktqabuqbk' });
        return data.a.gehuodong.list;
    }
}
exports.Picnic = Picnic;
