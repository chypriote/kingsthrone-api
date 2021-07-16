"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rewards = void 0;
const GoatResource_1 = require("../GoatResource");
class Rewards extends GoatResource_1.GoatResource {
    async claimDailyPoints() {
        await this.request({ 'daily': { 'getAlltask': [] }, 'rsn': '9zrizbjjmcs' });
    }
    async getDailyReward(id) {
        try {
            await this.request({ 'daily': { 'getrwd': { id } }, 'rsn': '2axnbamnxy' });
            return true;
        }
        catch (e) { /*We want to ignore completely*/
        }
        return false;
    }
    async claimWeeklyPoints() {
        await this.request({ 'weekly': { 'getAlltask': [] }, 'rsn': '4acbaxhhvaf' });
    }
    async getWeeklyReward(id) {
        try {
            await this.request({ 'weekly': { 'getrwd': { id } }, 'rsn': '2axnbamnxy' });
            return true;
        }
        catch (e) { /*We want to ignore completely*/
        }
        return false;
    }
    async getProgressionReward() {
        const data = await this.request({ 'chengjiu': { 'getAllrwd': [] }, 'rsn': '4fcgicgcabm' });
        return !!data.a.msgwin;
    }
    async claimLoginReward() {
        await this.request({ 'fuli': { 'qiandao': [] }, 'rsn': '6wguukkgpk' });
    }
}
exports.Rewards = Rewards;
