"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThroneRoom = void 0;
const GoatResource_1 = require("../GoatResource");
const ThroneRoom_1 = require("../../types/ThroneRoom");
class ThroneRoom extends GoatResource_1.GoatResource {
    //Levies
    async getCoins() {
        await this.request({ user: { jingYing: { jyid: ThroneRoom_1.LEVEE_TYPE.COIN } } });
    }
    async getArmy() {
        await this.request({ user: { jingYing: { jyid: ThroneRoom_1.LEVEE_TYPE.ARMY } } });
    }
    async getGrain() {
        await this.request({ user: { jingYing: { jyid: ThroneRoom_1.LEVEE_TYPE.GRAIN } } });
    }
    async loopAllLevies() {
        const status = await this.request({ user: { refjingying: [] } });
        for (let i = 0; i < status.a.jingYing.army.num; i++) {
            await this.getArmy();
        }
        for (let i = 0; i < status.a.jingYing.coin.num; i++) {
            await this.getCoins();
        }
        for (let i = 0; i < status.a.jingYing.food.num; i++) {
            await this.getGrain();
        }
    }
    async getAllLevies() {
        try {
            await this.request({ user: { jingYingAll: [] } });
        }
        catch (e) {
            return false;
        }
        return true;
    }
    //Decrees
    async getAllDecreesResources(type) {
        try {
            const data = await this.request({ user: { yjZhengWu: { act: type } } });
            return !!data.a.msgwin;
        }
        catch (e) {
            return false;
        }
    }
    async getDecree(type) {
        await this.request({ user: { zhengWu: { act: type } } });
    }
    async useSeal(count = 1) {
        await this.request({ user: { zhengWuLing: { num: count } } });
    }
}
exports.ThroneRoom = ThroneRoom;
