"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllianceChampionship = void 0;
const GoatResource_1 = require("../../GoatResource");
class AllianceChampionship extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ qxzb: { qxzbInfo: [] } });
        return data.a.qxzb;
    }
    async getPromotionRoundInfos() {
        const data = await this.request({ qxzb: { qxzbMatch: [] } });
        return data.a.qxzb;
    }
    async collectReward(turn) {
        await this.request({ "qxzb": { "qxzbBatAward": { "turn": turn } } });
    }
}
exports.AllianceChampionship = AllianceChampionship;
