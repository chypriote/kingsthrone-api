"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftingTree = void 0;
const GoatResource_1 = require("../../GoatResource");
class GiftingTree extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd1085Info: [] } });
        return data.a.braveEgg;
    }
    async selectReward(id) {
        await this.request({ huodong: { hd1085ChoiceRwd: { id: id } } });
    }
    async openBag(pos) {
        await this.request({ huodong: { hd1085Open: { pos: pos } } });
    }
}
exports.GiftingTree = GiftingTree;
