"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysteriousIsland = void 0;
const GoatResource_1 = require("../../GoatResource");
class MysteriousIsland extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd1089Info': [] } });
        return data.a.floatingIsland;
    }
    async selectIsland(id) {
        const data = await this.request({ 'huodong': { 'hd1089Select': { 'floorIndex': id } } });
        return data.a.floatingIsland;
    }
    async selectHero(id) {
        await this.request({ 'huodong': { 'hd1089SelectHero': { 'heroId': id } } });
    }
    async fight(id) {
        const data = await this.request({ 'huodong': { 'hd1089Fight': { 'heroId': id } } });
        return data.a.floatingIsland;
    }
    async getLevelReward(id) {
        await this.request({ 'huodong': { 'hd1089GetRwd': { 'id': id } } });
    }
}
exports.MysteriousIsland = MysteriousIsland;
