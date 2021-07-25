"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllianceSiege = void 0;
const GoatResource_1 = require("../../GoatResource");
class AllianceSiege extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'rsn': '5ywhevjahwy', 'kuaCLubBattle': { 'getInfo': [] } });
        return data.a.kuaCLubBattle;
    }
    async attackWall(count = 1) {
        const data = await this.request({ 'rsn': '3zehkssffww', 'kuaCLubBattle': { 'play': { 'type': 2, 'uid': 0, 'num': count } } });
        return data.a.type;
    }
    async attackGeneral(count = 1) {
        const data = await this.request({ 'rsn': '4fcghxxbihf', 'kuaCLubBattle': { 'play': { 'type': 3, 'uid': 0, 'num': count } } });
        return data.a.type;
    }
    async attackMember(uid, count = 1) {
        await this.request({ 'rsn': '1tbqwwwaiu', 'kuaCLubBattle': { 'play': { 'type': 4, 'uid': uid, 'num': count } } });
    }
    async claimTaskReward(id) {
        await this.request({ 'rsn': '6sxwullglsy', 'kuaCLubBattle': { 'getTaskRewards': { 'id': id } } });
    }
    async buySiegeWeapon(count = 1) {
        await this.request({ 'rsn': '7yclsddsvlg', 'kuaCLubBattle': { 'buyBattleNum': { 'num': count } } });
    }
}
exports.AllianceSiege = AllianceSiege;
