"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitedTimeQuests = void 0;
const GoatResource_1 = require("../GoatResource");
class LimitedTimeQuests extends GoatResource_1.GoatResource {
    async spendGems() {
        const data = await this.request({ huodong: { hd201Info: [] } });
        return data.a.xshuodong.cash;
    }
    async loseSoldiers() {
        const data = await this.request({ huodong: { hd202Info: [] } });
        return data.a.xshuodong.juanzhou;
    }
    async spendGold() {
        const data = await this.request({ huodong: { hd203Info: [] } });
        return data.a.xshuodong.coin;
    }
    async studyManuscripts() {
        const data = await this.request({ huodong: { hd204Info: [] } });
        return data.a.xshuodong.juanzhou;
    }
    async increaseKP() {
        const data = await this.request({ huodong: { hd206Info: [] } });
        return data.a.xshuodong.shili;
    }
    async enactDecrees() {
        const data = await this.request({ huodong: { hd207Info: [] } });
        return data.a.xshuodong.zhengwu;
    }
    async login() {
        const data = await this.request({ huodong: { hd208Info: [] } });
        return data.a.xshuodong.login;
    }
    async tourneyScore() {
        const data = await this.request({ huodong: { hd209Info: [] } });
        return data.a.xshuodong.yamen;
    }
    async arrangeMarriages() {
        const data = await this.request({ huodong: { hd210Info: [] } });
        return data.a.xshuodong.lianyin;
    }
    async energyDraughtQuest() {
        const data = await this.request({ huodong: { hd220Info: [] } });
        return data.a.xshuodong.huolidan;
    }
    async randomVisitsQuest() {
        const data = await this.request({ huodong: { hd1045Info: [] } });
        return data.a.xshuodong.sjxo;
    }
    async claimRewards(type) {
        const data = JSON.parse(`{ "huodong":{ "hd${type}Rwd":[] } }`);
        await this.request(data);
    }
}
exports.LimitedTimeQuests = LimitedTimeQuests;
