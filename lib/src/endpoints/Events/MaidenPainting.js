"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaidenPainting = void 0;
const GoatResource_1 = require("../../GoatResource");
class MaidenPainting extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong2: { hd1258Info: [] } });
        return {
            wheel: data.a.beautyDrawingMarket,
            challenge: data.a.beautyDrawingLove,
            limitedOffer: data.a.beautyDrawingGift,
            event: data.a.beautyDrawing,
            shop: data.u.beautyDrawing.shop,
        };
    }
    async buyPaint(count) {
        await this.request({ huodong2: { hd1258buy: { num: count } } });
    }
    async spinWheel(count) {
        await this.request({ huodong2: { hd1259Chou: { num: count } } });
    }
    async getShopItem(id) {
        await this.request({ huodong2: { hd1258exchange: { id: id } } });
    }
    async getBoxReward() {
        await this.request({ huodong2: { hd1258GetBoxRwd: [] } });
    }
}
exports.MaidenPainting = MaidenPainting;
