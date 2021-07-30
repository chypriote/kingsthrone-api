"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeoplesMonarch = void 0;
const GoatResource_1 = require("../../GoatResource");
class PeoplesMonarch extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd282Info': [] }, 'rsn': '3ehhpkehzef' });
        return data.a.penalize;
    }
    async buyShopItem(id) {
        await this.request({ 'huodong': { 'hd282buy': { 'id': id } }, 'rsn': '2yaaqnyyybq' });
    }
    async useItem(id) {
        await this.request({ 'huodong': { 'hd282play': { 'id': id } }, 'rsn': '9rnnmcrrcc' });
    }
    async exchangeItem(id) {
        await this.request({ 'huodong': { 'hd282exchange': { 'id': id } }, 'rsn': '6xwwbuybslx' });
    }
}
exports.PeoplesMonarch = PeoplesMonarch;
