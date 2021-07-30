"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitedTimeQuests = void 0;
const GoatResource_1 = require("../GoatResource");
class LimitedTimeQuests extends GoatResource_1.GoatResource {
    async loginQuest() {
        const data = await this.request({ 'huodong': { 'hd208Info': [] }, 'rsn': '2myyaxwhhyx' });
        return data.a.xshuodong.login;
    }
    async gemsQuest() {
        const data = await this.request({ 'huodong': { 'hd201Info': [] }, 'rsn': '8arrjvoiik' });
        return data.a.xshuodong.cash;
    }
    async marriageQuest() {
        const data = await this.request({ 'huodong': { 'hd210Info': [] }, 'rsn': '7ycclsglpvg' });
        return data.a.xshuodong.lianyin;
    }
    async randomVisits() {
        const data = await this.request({ 'huodong': { 'hd1045Info': [] }, 'rsn': '1tbbqeueiu' });
        return data.a.xshuodong.sjxo;
    }
    async energyDraught() {
        const data = await this.request({ 'huodong': { 'hd220Info': [] }, 'rsn': '3zeehfwzkhe' });
        return data.a.xshuodong.huolidan;
    }
}
exports.LimitedTimeQuests = LimitedTimeQuests;