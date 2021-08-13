"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparksUnderMoonlight = void 0;
const GoatResource_1 = require("../../GoatResource");
const SparksUnderMoonlight_1 = require("../../../types/Events/SparksUnderMoonlight");
class SparksUnderMoonlight extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong2': { 'hd1250Info': [] } });
        return data.a.NewValentinesDay;
    }
    async claimQuestReward(type, id) {
        await this.request({ 'huodong2': { 'hd1250QuestRwd': { 'type': type, 'id': id } } });
    }
    async donateItem(type, count) {
        await this.request({ 'huodong2': { 'hd1250Donate': [{ 'type': SparksUnderMoonlight_1.SPARKS_ITEM_TYPE, 'num': count }] } });
    }
    /** Top Up */
    async continualTopUpInfos() {
        const data = await this.request({ huodong2: { hd1251Info: [] } });
        return data.a.czhuodong.NewLoverDay;
    }
    async getContinualTopUp() {
        await this.request({ huodong2: { hd1251GetBox: [] } });
    }
}
exports.SparksUnderMoonlight = SparksUnderMoonlight;
