"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const GoatResource_1 = require("../GoatResource");
class Shop extends GoatResource_1.GoatResource {
    async getShop() {
        const data = await this.request({ shop: { shoplist: [] } });
        return {
            packs: data.a.shop.giftlist,
            items: data.a.shop.list,
        };
    }
    async buyShopItem(id) {
        await this.request({ shop: { shopLimit: { id: id } } });
    }
    async buyShopPack(id) {
        await this.request({ shop: { shopGift: { id: id } } });
    }
}
exports.Shop = Shop;
