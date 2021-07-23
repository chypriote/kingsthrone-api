"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campaign = void 0;
const GoatResource_1 = require("../GoatResource");
const lodash_1 = require("lodash");
class Campaign extends GoatResource_1.GoatResource {
    async oneKeyPve() {
        await this.request({ 'user': { 'onekey_pve': [] }, 'rsn': lodash_1.sample([
                '3zehnfsnnfw', '6sxwyglykkb', '9mrtimsinst', '5ywhryfrepe', '5jywefavfpe',
            ]) });
    }
    async fightCampaignBoss(id) {
        await this.request({ 'user': { 'pvb': { 'id': id } }, 'rsn': '7xycvgdspov' });
    }
}
exports.Campaign = Campaign;
