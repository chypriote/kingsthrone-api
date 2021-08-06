"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipmentTrial = void 0;
const GoatResource_1 = require("../../GoatResource");
class EquipmentTrial extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1332Info': [] } });
        return {
            event: data.a.EquipmentMatching,
            wheel: data.a.EquipmentMatchingDraw,
            limitedOffer: data.a.EquipmentMatchingGift,
            ranking: data.a.EquipmentMatchingPower.list,
        };
    }
    async claimQuest(type, daily = 0) {
        await this.request({ 'huodong2': { 'hd1332GetTaskRewards': { 'type': type, 'is_every': daily } } });
    }
    /** Equipment Wheel */
    async equipmentWheelInfo() {
        const data = await this.request({ 'huodong2': { 'hd1334Info': [] } });
        return data.a.EquipmentMatchingDraw;
    }
    async selectReward(key, id) {
        //key = item position, id = wheel position 2top 1bot
        await this.request({ 'huodong2': { 'hd1334Choose': { 'key': key, 'id': id } } });
    }
    async buyWarriorToken(count = 1) {
        await this.request({ 'huodong2': { 'hd1334Buy': { 'num': count } } });
    }
    async spinWheel(count) {
        await this.request({ 'huodong2': { 'hd1334Chou': { 'num': count } } });
    }
    async equipmentTrialRank() {
        const data = await this.request({ 'huodong2': { 'hd1332Rank': [] } });
        return data.a.EquipmentMatching;
    }
    async equipmentPowerRanking() {
        const data = await this.request({ 'huodong2': { 'hd1339Info': [] } });
        return data.a.cbhuodong.EquipmentMatchingPower.cfg;
    }
    /** Top Up */
    async continualTopUpInfos() {
        const data = await this.request({ 'huodong2': { 'hd1336Info': [] } });
        return data.a.czhuodong.EquipmentMatchingDay;
    }
    async getContinualTopUp() {
        await this.request({ 'huodong2': { 'hd1336GetBox': [] } });
    }
    /** Limited Offer */
    async limitedOfferInfo() {
        const data = await this.request({ 'huodong2': { 'hd1335Info': [] } });
        return data.a.EquipmentMatchingGift;
    }
    async buyLimitedOffer(id) {
        await this.request({ 'huodong2': { 'hd1335BuyGift': { 'id': id } } });
    }
}
exports.EquipmentTrial = EquipmentTrial;
