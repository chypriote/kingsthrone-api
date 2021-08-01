"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alliance = void 0;
const GoatResource_1 = require("../GoatResource");
const WorldBoss_1 = require("../../types/WorldBoss");
class Alliance extends GoatResource_1.GoatResource {
    async getAllianceInfos() {
        const data = await this.request({ club: { shopList: [], clubInfo: [] } });
        return data.a.club;
    }
    async contributeAlliance() {
        try {
            await this.request({ club: { dayGongXian: { dcid: 5 } } });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    async getAllianceBossInfo() {
        const data = await this.request({ club: { clubBossInfo: [] } });
        return {
            bosses: data.a.club.bossInfo,
            heroes: data.a.club.bossft,
        };
    }
    async fightAllianceBoss(boss, hero) {
        try {
            await this.request({ club: { clubBossPK: { cbid: boss, id: hero } } });
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
        const alliances = await this.request({ club: { clubList: [] } });
        return alliances.a.club.clubList;
    }
    async buyAllianceShopItem(id) {
        await this.request({ club: { shopBuy: { id: id } } });
    }
    async getXServerBattleInfos() {
        const data = await this.request({ club: { kuaPKinfo: [] } });
        return data.a.club.clubKuaInfo;
    }
    async getXServerFight() {
        const data = await this.request({ club: { kuaPKCszr: [] } });
        return {
            status: data.a.club.clubKuaCszr,
            heroes: data.a.club.kuaHeroList,
        };
    }
    async dispatchXServerHero(id) {
        await this.request({ club: { kuaPKAdd: { hid: id } } });
    }
    async getXServerRewardInfos() {
        const data = await this.request({ club: { kuaPKrwdinfo: [] } });
        return data.a.club.clubKuapkrwd;
    }
    async claimXServerReward() {
        await this.request({ club: { kuaPKrwdget: { id: 1 } } });
    }
}
exports.Alliance = Alliance;
