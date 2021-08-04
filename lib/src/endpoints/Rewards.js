"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rewards = void 0;
const GoatResource_1 = require("../GoatResource");
class Rewards extends GoatResource_1.GoatResource {
    async claimDailyPoints() {
        await this.request({ daily: { getAlltask: [] } });
    }
    async getDailyReward(id) {
        try {
            await this.request({ daily: { getrwd: { id } } });
            return true;
        }
        catch (e) {
            /*We want to ignore completely*/
        }
        return false;
    }
    async claimWeeklyPoints() {
        await this.request({ weekly: { getAlltask: [] } });
    }
    async getWeeklyReward(id) {
        try {
            await this.request({ weekly: { getrwd: { id } } });
            return true;
        }
        catch (e) {
            /*We want to ignore completely*/
        }
        return false;
    }
    async getProgressionReward() {
        const data = await this.request({ chengjiu: { getAllrwd: [] } });
        return !!data.a.msgwin;
    }
    async claimLoginReward() {
        var _a, _b;
        const data = await this.request({ fuli: { qiandao: [] } });
        if ((_b = (_a = data.a) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.errror) {
            if (data.a.system.errror === "Today's log-in times has run out") {
                return false;
            }
            throw new Error(data.a.system.errror.msg);
        }
        return true;
    }
    async claimFirstWeekRewards(id) {
        var _a, _b;
        const data = await this.request({ huodong: { hd287Get: { id: id } } });
        if ((_b = (_a = data.a) === null || _a === void 0 ? void 0 : _a.system) === null || _b === void 0 ? void 0 : _b.errror) {
            if (data.a.system.errror.msg === 'Duplicated reward collection for 7 Day Sign-in event') {
                return false;
            }
            throw new Error(data.a.system.errror.msg);
        }
        return true;
    }
    async claimGrowthFund(id) {
        await this.request({ huodong: { hd1061Rwd: { type: '', id: id } } });
    }
}
exports.Rewards = Rewards;
