"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rankings = void 0;
const GoatResource_1 = require("../GoatResource");
class Rankings extends GoatResource_1.GoatResource {
    constructor() {
        super(...arguments);
        this.localLadder = null;
    }
    async payHomageKP() {
        await this.request({ ranking: { mobai: { type: 1 } } });
    }
    async payHomageCampaign() {
        await this.request({ ranking: { mobai: { type: 2 } } });
    }
    async payHomageIntimacy() {
        await this.request({ ranking: { mobai: { type: 3 } } });
    }
    async getLadders(force = false) {
        if (this.localLadder && !force) {
            return this.localLadder;
        }
        const data = await this.request({ ranking: { paihang: { type: 0 } } });
        this.localLadder = data.a.ranking;
        return this.localLadder;
    }
    async getLadderKP(force = false) {
        return (await this.getLadders(force)).shili;
    }
    async getLadderCampaign(force = false) {
        return (await this.getLadders(force)).guanka;
    }
    async getLadderIntimacy(force = false) {
        return (await this.getLadders(force)).love;
    }
    async payHomageXSKP() {
        await this.request({ ranking: { mobai: { type: 4 } } });
    }
    async payHomageXSAlliance() {
        await this.request({ ranking: { mobai: { type: 5 } } });
    }
    async payHomageXSIntimacy() {
        await this.request({ ranking: { mobai: { type: 8 } } });
    }
    async getLadderXSKP() {
        const data = await this.request({ ranking: { paihang: { type: 4 } } });
        return data.a.ranking.shiliKua;
    }
    async getLadderXSAlliance() {
        const data = await this.request({ ranking: { paihang: { type: 5 } } });
        return data.a.ranking.clubKua;
    }
    async getLadderXSIntimacy() {
        const data = await this.request({ ranking: { paihang: { type: 8 } } });
        return data.a.ranking.loveKua;
    }
}
exports.Rankings = Rankings;
