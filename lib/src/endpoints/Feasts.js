"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feasts = void 0;
const GoatResource_1 = require("../GoatResource");
class Feasts extends GoatResource_1.GoatResource {
    async getFeastsInfo() {
        const data = await this.request({ 'jiulou': { 'jlInfo': [] }, 'rsn': '3zhwezswfze' });
        return data.a.jiulou;
    }
    async getFeast(uid) {
        const data = await this.request({ 'jiulou': { 'yhGo': { 'fuid': uid } }, 'rsn': '2ylayqahmb' });
        return data.a.jiulou.yhInfo;
    }
    async openFeast() {
        await this.request({ 'jiulou': { 'yhHold': { 'type': 1, 'isPush': 1, 'isOpen': true } }, 'rsn': '8akriooeom' });
    }
    async joinFeast(uid, seat) {
        const data = await this.request({
            'jiulou': { 'yhChi': { 'type': 3, 'xwid': seat, 'fuid': uid } },
            'rsn': '9rsnctrnrt',
        });
        const { jfly, jlShop, yhInfo } = data.a.jiulou;
        return { jfly, jlShop, yhInfo };
    }
    async buyFeastItem(id) {
        await this.request({ 'jiulou': { 'shopChange': { id } }, 'rsn': '5wfvrfphye' });
    }
}
exports.Feasts = Feasts;
