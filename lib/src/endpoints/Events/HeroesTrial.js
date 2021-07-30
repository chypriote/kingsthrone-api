"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroesTrial = void 0;
const GoatResource_1 = require("../../GoatResource");
class HeroesTrial extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1299Info': [] }, 'rsn': '8maoejkjoam' });
        return data.a.brave;
    }
    async selectHero(id) {
        await this.request({ 'huodong': { 'hd1083SelectHero': { 'heroId': id } }, 'rsn': '3ehhpkekrnp' });
    }
    async fight(id) {
        const data = await this.request({ 'huodong': { 'hd1083Fight': { 'heroId': id } }, 'rsn': '4ciifvaccb' });
        return data.a.brave;
    }
    async buyTutorsGift(count = 1) {
        await this.request({ 'huodong': { 'hd1083BuyNum': { 'num': count } }, 'rsn': '5wppyejjfy' });
    }
    async refreshHero(id) {
        await this.request({ 'huodong': { 'hd1083TiLi': { 'heroId': id } }, 'rsn': '1qkkturuwri' });
    }
    async claimReward(id) {
        await this.request({ 'huodong': { 'hd1083GetRwd': { 'id': id } }, 'rsn': '6sxxwbyyyuy' });
    }
}
exports.HeroesTrial = HeroesTrial;
