"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
const GoatResource_1 = require("../GoatResource");
class Items extends GoatResource_1.GoatResource {
    async getBag() {
        const data = await this.request({ 'rsn': '3hkekekhzp', 'item': { 'itemlist': [] } });
        return data.a.item.itemList;
    }
    async use(item, count) {
        const data = await this.request({ 'rsn': '1tbkbkruwa', 'item': { 'useitem': { 'id': item, 'count': count } } });
        return data.u.item.itemList[0];
    }
    async combine(item, count) {
        const data = await this.request({ 'rsn': '4cifiaahbv', 'item': { 'hecheng': { 'count': count, 'id': item } } });
        return data.u.item.itemList;
    }
}
exports.Items = Items;
