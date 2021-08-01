"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathOfWealth = void 0;
const GoatResource_1 = require("../../GoatResource");
class PathOfWealth extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd293Info': [] }, 'rsn': '4cimihmcxf' });
        return data.a.xbhuodong;
    }
    async rollDice() {
        await this.request({ 'huodong': { 'hd293Run': [] }, 'rsn': '6sxwksbgwsy' });
    }
    async claimDice(id) {
        await this.request({ 'huodong': { 'hd293Task': { 'id': id } }, 'rsn': '5jywrjhjver' });
    }
    async claimAllDices() {
        for (let i = 1; i < 15; i++) {
            await this.claimDice(i);
        }
    }
    async openChest(id) {
        await this.request({ 'huodong': { 'hd293Rwd': { 'id': id } }, 'rsn': '2myahmmhlyq' });
    }
}
exports.PathOfWealth = PathOfWealth;
