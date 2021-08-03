"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldBoss = void 0;
const GoatResource_1 = require("../GoatResource");
const WorldBoss_1 = require("../../types/WorldBoss");
class WorldBoss extends GoatResource_1.GoatResource {
    async attackMinion(id) {
        try {
            await this.request({ wordboss: { hitmenggu: { id } } });
        }
        catch (e) {
            const msg = e.toString();
            if (msg === 'Error: The battle has ended') {
                return WorldBoss_1.FIGHT_STATUS.BATTLE_ENDED;
            }
            if (msg === 'Error: The hero is resting') {
                return WorldBoss_1.FIGHT_STATUS.HERO_RESTING;
            }
            console.log(e);
        }
        return WorldBoss_1.FIGHT_STATUS.ONGOING;
    }
    async attackBoss(id) {
        try {
            await this.request({ wordboss: { hitgeerdan: { id } } });
        }
        catch (e) {
            const msg = e.toString();
            if (msg === 'Error: The battle has ended') {
                return WorldBoss_1.FIGHT_STATUS.BATTLE_ENDED;
            }
            if (msg === 'Error: The hero is resting') {
                return WorldBoss_1.FIGHT_STATUS.HERO_RESTING;
            }
            console.log(e);
        }
        return WorldBoss_1.FIGHT_STATUS.ONGOING;
    }
    async recoverHero(id) {
        await this.request({ wordboss: { comebackmg: { id: id } } });
    }
    async buyItem(id) {
        await this.request({ wordboss: { shopBuy: { id: id } } });
    }
}
exports.WorldBoss = WorldBoss;
