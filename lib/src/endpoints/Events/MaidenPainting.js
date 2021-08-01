"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaidenPainting = void 0;
const GoatResource_1 = require("../../GoatResource");
class MaidenPainting extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1258Info': [] }, 'rsn': '6xwbypxkpwy' });
        return {
            wheel: data.a.beautyDrawingMarket,
            challenge: data.a.beautyDrawingLove,
            limitedOffer: data.a.beautyDrawingGift,
            event: data.a.beautyDrawing,
            shop: data.u.beautyDrawing.shop,
        };
    }
    async buyPaint(count) {
        await this.request({ 'huodong2': { 'hd1258buy': { 'num': count } }, 'rsn': '1tbabueuta' });
    }
    async spinWheel(count) {
        await this.request({ 'huodong2': { 'hd1259Chou': { 'num': count } }, 'rsn': '6wugubpblk' });
    }
    async getShopItem(id) {
        await this.request({ 'huodong2': { 'hd1258exchange': { 'id': id } }, 'rsn': '9rnsntcist' });
    }
    async getBoxReward() {
        await this.request({ 'huodong2': { 'hd1258GetBoxRwd': [] }, 'rsn': '7xycplydlov' });
    }
}
exports.MaidenPainting = MaidenPainting;
