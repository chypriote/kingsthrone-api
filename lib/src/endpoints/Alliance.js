"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alliance = void 0;
const GoatResource_1 = require("../GoatResource");
const WorldBoss_1 = require("../../types/WorldBoss");
class Alliance extends GoatResource_1.GoatResource {
    async getAllianceInfos() {
        const data = await this.request({ 'club': { 'shopList': [], 'clubInfo': [] }, 'rsn': '4fcghcixmfb' });
        return data.a.club;
    }
    async contributeAlliance() {
        try {
            await this.request({ 'club': { 'dayGongXian': { 'dcid': 5 } }, 'rsn': '3hfkksnwfn' });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async getAllianceBossInfo() {
        const data = await this.request({ 'club': { 'clubBossInfo': [] }, 'rsn': '5wfppaeavy' });
        return data.a.club.bossInfo;
    }
    async fightAllianceBoss(boss, hero) {
        try {
            await this.request({ 'club': { 'clubBossPK': { 'cbid': boss, 'id': hero } }, 'rsn': '4acbfaxfaxf' });
        }
        catch (e) {
            const msg = e.toString();
            if (msg === 'Error: The battle has ended') {
                return WorldBoss_1.FIGHT_STATUS.BATTLE_ENDED;
            }
            if (msg === 'Error: The hero is resting') {
                return WorldBoss_1.FIGHT_STATUS.HERO_RESTING;
            }
            if (msg === 'Error: The boss has been killed') {
                return WorldBoss_1.FIGHT_STATUS.BOSS_KILLED;
            }
            console.log(msg);
        }
        return WorldBoss_1.FIGHT_STATUS.ONGOING;
    }
    async getLadder() {
        const alliances = await this.request({ club: { clubList: [] }, rsn: '3zhpsspfrse' });
        return alliances.a.club.clubList;
    }
    async buyAllianceShopItem(id) {
        await this.request({ 'club': { 'shopBuy': { 'id': id } }, 'rsn': '4fcghcixgbb' });
    }
    async getXServerBattleInfos() {
        const data = await this.request({ 'club': { 'kuaPKinfo': [] }, 'rsn': '4fcghcfmimb' });
        return data.a.club.clubKuaInfo;
    }
    async getXServerFight() {
        const data = await this.request({ 'club': { 'kuaPKCszr': [] }, 'rsn': '6sxwgxpbwbg' });
        return {
            status: data.a.club.clubKuaCszr,
            heroes: data.a.club.kuaHeroList,
        };
    }
    async dispatchXServerHero(id) {
        await this.request({ 'club': { 'kuaPKAdd': { 'hid': id } }, 'rsn': '2myaxyxlabq' });
    }
}
exports.Alliance = Alliance;
