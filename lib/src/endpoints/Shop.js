"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const GoatResource_1 = require("../GoatResource");
class Shop extends GoatResource_1.GoatResource {
    async getShop() {
        const data = await this.request({ 'shop': { 'shoplist': [] }, 'rsn': '3ehpshweeff' });
        return {
            packs: data.a.shop.giftlist,
            items: data.a.shop.list,
        };
    }
    async buyShopItem(id) {
        await this.request({ 'shop': { 'shopLimit': { 'id': id } }, 'rsn': '6xwblwuluwy' });
    }
    async buyShopPack(id) {
        await this.request({ 'shop': { 'shopGift': { 'id': id } }, 'rsn': '2myahmyxmyh' });
    }
}
exports.Shop = Shop;
