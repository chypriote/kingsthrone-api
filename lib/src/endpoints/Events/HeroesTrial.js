"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesTrial = void 0;
const GoatResource_1 = require("../../GoatResource");
class HeroesTrial extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong: { hd1083Info: [] } });
        return data.a.brave;
    }
    async selectHero(id) {
        await this.request({ huodong: { hd1083SelectHero: { heroId: id } } });
    }
    async fight(id) {
        const data = await this.request({ huodong: { hd1083Fight: { heroId: id } } });
        return data.a.brave;
    }
    async buyTutorsGift(count = 1) {
        await this.request({ huodong: { hd1083BuyNum: { num: count } } });
    }
    async refreshHero(id) {
        await this.request({ huodong: { hd1083TiLi: { heroId: id } } });
    }
    async claimReward(id) {
        await this.request({ huodong: { hd1083GetRwd: { id: id } } });
    }
}
exports.HeroesTrial = HeroesTrial;
