"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XSChallenges = void 0;
const GoatResource_1 = require("../../GoatResource");
class XSChallenges extends GoatResource_1.GoatResource {
    async intimacy() {
        const data = await this.request({ huodong: { hd314Info: [] } });
        return { ...data.a.kuacbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async getIntimacyRankings() {
        const data = await this.request({ huodong: { hd314UserRank: [] } });
        return data.a.kuacbhuodong;
    }
    async kingdomPower() {
        const data = await this.request({ huodong: { hd313Info: [] } });
        return { ...data.a.kuacbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async getKingdomPowerRankings() {
        const data = await this.request({ huodong: { hd313UserRank: [] } });
        return data.a.kuacbhuodong;
    }
    async quality() {
        const data = await this.request({ huodong: { hd1138Info: [] } });
        return { ...data.a.kuacbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async getQuality() {
        const data = await this.request({ huodong: { hd1138UserRank: [] } });
        return data.a.kuacbhuodong;
    }
    async claimProgressReward(challenge, id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: challenge, id: id } } });
    }
}
exports.XSChallenges = XSChallenges;
