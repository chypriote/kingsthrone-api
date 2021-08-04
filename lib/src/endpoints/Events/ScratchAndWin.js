"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScratchAndWin = void 0;
const GoatResource_1 = require("../../GoatResource");
class ScratchAndWin extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1341Info': [] } });
        return data.a.scratchCard;
    }
    async buyScratchTicket(count = 1) {
        await this.request({ 'huodong2': { 'hd1341BuyItem': { 'num': count } } });
    }
    async scratch(count = 1) {
        await this.request({ 'huodong2': { 'hd1341Play': { 'num': count } } });
    }
    async exchangeItem(id, type, count = 1) {
        await this.request({ 'huodong2': { 'hd1341ShopBuy': { 'type': type, 'num': count, 'id': id } } });
    }
    /** Top Up */
    async continualTopUpInfos() {
        const data = await this.request({ 'huodong2': { 'hd1341Info': [] } });
        return data.a.czhuodong.scratchCardDay;
    }
    async getContinualTopUp() {
        await this.request({ huodong2: { hd1341GetBox: [] } });
    }
}
exports.ScratchAndWin = ScratchAndWin;
