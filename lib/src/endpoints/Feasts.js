"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feasts = void 0;
const GoatResource_1 = require("../GoatResource");
const Feasts_1 = require("../../types/Feasts");
class Feasts extends GoatResource_1.GoatResource {
    async getFeastsInfo() {
        const data = await this.request({ 'jiulou': { 'jlInfo': [] } });
        return data.a.jiulou;
    }
    async getFeast(uid) {
        const data = await this.request({ 'jiulou': { 'yhGo': { 'fuid': uid } } });
        return data.a.jiulou.yhInfo;
    }
    async openFeast(type = Feasts_1.FEAST_TYPE.SMALL) {
        await this.request({ 'jiulou': { 'yhHold': { 'type': type, 'isPush': 1, 'isOpen': true } } });
    }
    async joinFeast(uid, seat) {
        const data = await this.request({ 'jiulou': { 'yhChi': { 'type': 3, 'xwid': seat, 'fuid': uid } } });
        const { jfly, jlShop, yhInfo } = data.a.jiulou;
        return { jfly, jlShop, yhInfo };
    }
    async buyFeastItem(id) {
        await this.request({ 'jiulou': { 'shopChange': { id } } });
    }
}
exports.Feasts = Feasts;
