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
        return data.a.xshuodong.amy;
    }
    async spendGold() {
        const data = await this.request({ huodong: { hd203Info: [] } });
        return data.a.xshuodong.coin;
    }
    async studyManuscripts() {
        const data = await this.request({ huodong: { hd204Info: [] } });
        return data.a.xshuodong.juanzhou;
    }
    async increaseIntimacy() {
        const data = await this.request({ huodong: { hd205Info: [] } });
        return data.a.xshuodong.qinmi;
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
    async trainingGround() {
        const data = await this.request({ huodong: { hd211Info: [] } });
        return data.a.xshuodong.school;
    }
    async killSiegeBoss() {
        const data = await this.request({ "huodong": { "hd215Info": [] } });
        return data.a.xshuodong.jishag2d;
    }
    async challengeTokens() {
        const data = await this.request({ huodong: { hd216Info: [] } });
        return data.a.xshuodong.tiaozhanshu;
    }
    async processionsDonation() {
        const data = await this.request({ huodong: { hd218Info: [] } });
        return data.a.xshuodong.zhenzai;
    }
    async goodwillDraughtQuest() {
        const data = await this.request({ huodong: { hd219Info: [] } });
        return data.a.xshuodong.tilidan;
    }
    async energyDraughtQuest() {
        const data = await this.request({ huodong: { hd220Info: [] } });
        return data.a.xshuodong.huolidan;
    }
    async increaseCharm() {
        const data = await this.request({ huodong: { hd221Info: [] } });
        return data.a.xshuodong.meilizhi;
    }
    async attendFeasts() {
        const data = await this.request({ huodong: { hd222Info: [] } });
        return data.a.xshuodong.fuyanhui;
    }
    async damageAllianceBosses() {
        const data = await this.request({ huodong: { hd223Info: [] } });
        return data.a.xshuodong.clubbosshit;
    }
    async killAllianceBosses() {
        const data = await this.request({ huodong: { hd224Info: [] } });
        return data.a.xshuodong.clubbossjs;
    }
    async feastPoints() {
        const data = await this.request({ huodong: { hd225Info: [] } });
        return data.a.xshuodong.jiulouzf;
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
