"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenges = void 0;
const GoatResource_1 = require("../../GoatResource");
class Challenges extends GoatResource_1.GoatResource {
    async allianceExperience() {
        const data = await this.request({ huodong: { hd250Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async feastPoints() {
        const data = await this.request({ huodong: { hd256Info: [] } });
        return { ...data.a.jiulou, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async equipment() {
        const data = await this.request({ huodong2: { hd1339Info: [] } });
        return {
            power: data.a.cbhuodong.EquipmentMatchingPower,
            powerlist: data.a.EquipmentMatchingPower.list,
            myPowerRid: data.a.cbhuodong.myPowerRid,
            rewards: data.u.cbhuodong.cbTaskStatus,
        };
    }
    async allianceIntimacy() {
        const data = await this.request({ huodong: { hd312Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async alliancePower() {
        const data = await this.request({ huodong: { hd310Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async charm() {
        const data = await this.request({ huodong: { hd258Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async grain() {
        const data = await this.request({ huodong: { hd259Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async intimacy() {
        const data = await this.request({ huodong: { hd253Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async kingdomPower() {
        const data = await this.request({ huodong: { hd252Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async loseSoldiers() {
        const data = await this.request({ huodong: { hd257Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async maidenExperience() {
        const data = await this.request({ huodong: { hd1075Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async quality() {
        const data = await this.request({ huodong: { hd1078Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async raiseChildren() {
        const data = await this.request({ huodong: { hd311Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async rareBeasts() {
        const data = await this.request({ huodong: { hd1098Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async spendGold() {
        const data = await this.request({ huodong: { hd255Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async tourney() {
        const data = await this.request({ huodong: { hd254Info: [] } });
        return { ...data.a.cbhuodong, rewards: data.u.cbhuodong.cbTaskStatus };
    }
    async claimProgressReward(challenge, id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: challenge, id: id } } });
    }
}
exports.Challenges = Challenges;
