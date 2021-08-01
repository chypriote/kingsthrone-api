"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftingTree = void 0;
const GoatResource_1 = require("../../GoatResource");
class GiftingTree extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd1085Info': [] }, 'rsn': '3hkkewpzzp' });
        return data.a.braveEgg;
    }
    async selectReward(id) {
        await this.request({ 'huodong': { 'hd1085ChoiceRwd': { 'id': id } }, 'rsn': '8maaoriaimo' });
    }
    async openBag(pos) {
        await this.request({ 'huodong': { 'hd1085Open': { 'pos': pos } }, 'rsn': '1kttubrtiwr' });
    }
}
exports.GiftingTree = GiftingTree;
