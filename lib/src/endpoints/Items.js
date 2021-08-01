"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
const GoatResource_1 = require("../GoatResource");
class Items extends GoatResource_1.GoatResource {
    async getBag() {
        const data = await this.request({ item: { itemlist: [] } });
        return data.a.item.itemList;
    }
    async use(item, count) {
        const data = await this.request({ item: { useitem: { id: item, count: count } } });
        return data.u.item.itemList[0];
    }
    async combine(item, count) {
        const data = await this.request({ item: { hecheng: { count: count, id: item } } });
        return data.u.item.itemList;
    }
    async useForHero(item, hid, count = 1) {
        await this.request({ item: { useforhero: { count: count, heroid: hid, id: item } } });
    }
}
exports.Items = Items;
