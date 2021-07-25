"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divining = void 0;
const GoatResource_1 = require("../../GoatResource");
class Divining extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd1123Info': [] }, 'rsn': '4cimghigcg' });
        return data.a.Astrology;
    }
    async selectStarSign(id = 3) {
        await this.request({ 'huodong': { 'hd1123select': { 'id': id } }, 'rsn': '8maoearoiok' });
    }
    async stargaze() {
        await this.request({ 'huodong': { 'hd1123guanxing': [] }, 'rsn': '1ktuitbttra' });
    }
    async buyGlobes(count = 1) {
        await this.request({ 'huodong': { 'hd1123BuyItem': { 'num': count } }, 'rsn': '2myahqymxhh' });
    }
    async divine(count = 1) {
        await this.request({ 'huodong': { 'hd1123zhanxing': { 'num': count } }, 'rsn': '5wpfphpaye' });
    }
    async getShopItem(id) {
        await this.request({ 'huodong': { 'hd1123Exchange': { 'num': 1, 'id': id } }, 'rsn': '5wpfphehvy' });
    }
}
exports.Divining = Divining;
