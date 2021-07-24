"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftOfTheFae = void 0;
const GoatResource_1 = require("../../GoatResource");
class GiftOfTheFae extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1299Info': [] }, 'rsn': '8maoejkjoam' });
        return data.a.weekHangUp;
    }
    async openFreeTree() {
        await this.request({ 'huodong2': { 'hd1299OpenFreeGj': [] }, 'rsn': '1qktrrwteku' });
    }
    async useQuickCollect(tree = 1) {
        await this.request({ 'huodong2': { 'hd1299Fast': { 'id': tree } }, 'rsn': '9zmrccbzmcs' });
    }
    async useExtraOutput(tree = 1) {
        await this.request({ 'huodong2': { 'hd1299Extra': { 'id': tree } }, 'rsn': '9rnsrjzimt' });
    }
    async selectPoolReward(rwd = 1, pool = 1) {
        await this.request({ 'huodong2': { 'hd1299Choose': { 'idd': rwd, 'id': pool } }, 'rsn': '4cimchmfav' });
    }
    async pourDew(water, pool = 1) {
        await this.request({ 'huodong2': { 'hd1299ZhuShui': { 'num': water, 'id': pool } }, 'rsn': '9zmrccbbtzm' });
    }
}
exports.GiftOfTheFae = GiftOfTheFae;
