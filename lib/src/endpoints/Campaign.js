"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campaign = void 0;
const GoatResource_1 = require("../GoatResource");
class Campaign extends GoatResource_1.GoatResource {
    async oneKeyPve() {
        await this.request({ user: { onekey_pve: [] } });
    }
    async fightCampaignBoss(id) {
        await this.request({ user: { pvb: { id: id } } });
    }
}
exports.Campaign = Campaign;
