"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Children = void 0;
const GoatResource_1 = require("../GoatResource");
class Children extends GoatResource_1.GoatResource {
    //Sons
    async getSonsStatus() {
        const data = await this.request({ 'xingqin': { 'xingqinsuc': [] }, 'rsn': '4fcgmahfhxf' });
        return data.a.xingqin;
    }
    async raiseAllSons() {
        try {
            await this.request({ 'rsn': '3hfkkwrshp', 'son': { 'allplay': [] } });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async raiseSon(id) {
        await this.request({ 'rsn': '8maoemroveo', 'son': { 'play': { 'id': id } } });
    }
    async nameSon(id) {
        const randName = await this.request({ 'rsn': '7coycpvlov', 'guide': { 'sonRandName': { 'id': id } } });
        const name = randName.a.system.randname.name;
        await this.request({ 'rsn': '6wuxwkywkb', 'son': { 'sonname': { 'name': name, 'id': id } } });
    }
    async useEnergyDraught(son, num) {
        await this.request({ 'rsn': '3hkehwrepf', 'son': { 'OneTapFood': { 'sid': son, 'num': num } } });
    }
    async evaluateSon(son) {
        await this.request({ 'rsn': '7yclgxsgvlp', 'son': { 'keju': { 'id': son } } });
    }
    //InLaws
    async getInLaws() {
        const friends = await this.request({ 'friends': { 'getPrivateChatData': [] }, 'rsn': '7yvovxpxyp' });
        return friends.a.friends.qjlist;
    }
    async visitInLaw(uid) {
        await this.request({ 'friends': { 'qjvisit': { 'fuid': uid } }, 'rsn': '3hzewhwzkp' });
    }
    async visitInLaws() {
        await this.request({ 'friends': { 'qjvisit': { 'fuid': 0 } }, 'rsn': '4acbmmxgfmg' });
    }
    //Marriage
    async getProposals() {
        const data = await this.request({ 'rsn': '8maaovakrxm', 'son': { 'getTiqin': [] } });
        return data.a.son.qList;
    }
    async acceptProposal(son, partner, uid, type = 2) {
        //type 2= dowry, 1= gems ?
        await this.request({ 'rsn': '5wppjpvrae', 'son': { 'agree': { 'mysid': son, 'sid': partner, 'uid': uid, 'type': type } } });
    }
    async matchMaker(son) {
        const data = await this.request({ 'rsn': '9mrrtjrjtrc', 'son': { 'zhaoqin': { 'id': son } } });
        return data.a.son.cList.list;
    }
    async marry(son, partner, uid, type = 2) {
        await this.request({ 'rsn': '7xyycgxgscy', 'son': { 'jiehun': { 'mysid': son, 'sid': partner, 'uid': uid, 'type': type } } });
    }
    async propose(son, type = 2) {
        await this.request({ 'rsn': '7cooxvygsg', 'son': { 'tiqin': { 'type': type, 'isPush': 1, 'uid': 0, 'sid': son } } });
    }
}
exports.Children = Children;
