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
}
exports.MaidenPainting = MaidenPainting;
