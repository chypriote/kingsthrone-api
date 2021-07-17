"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldBoss = void 0;
const GoatResource_1 = require("../GoatResource");
const WorldBoss_1 = require("../../types/goat/WorldBoss");
class WorldBoss extends GoatResource_1.GoatResource {
    async attackMinion(id) {
        try {
            await this.request({ 'wordboss': { 'hitmenggu': { id } }, 'rsn': '4fxvghbbxf' });
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
            await this.request({ 'wordboss': { 'hitgeerdan': { id } }, 'rsn': '8mxiaxameo' });
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
        await this.request({ 'wordboss': { 'comebackmg': { 'id': id } }, 'rsn': '1ktubatqtaa' });
    }
    async buyItem(id) {
        await this.request({ 'wordboss': { 'shopBuy': { 'id': id } }, 'rsn': '8jmamkkvrkk' });
    }
}
exports.WorldBoss = WorldBoss;
