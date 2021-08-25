"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kingdom = void 0;
const GoatResource_1 = require("../GoatResource");
class Kingdom extends GoatResource_1.GoatResource {
    async getCastleRewards(id) {
        try {
            const reward = await this.request({ hangUpSystem: { getRewards: { type: 'all', id: id } } });
            return reward.u.hangUpSystem.info[0];
        }
        catch (e) {
            return false;
        }
    }
    async claimAll(castleId) {
        try {
            await this.request({ hangUpSystem: { getSonDispatchRewards: { eventId: 'all', id: castleId } } });
        }
        catch (e) {
            console.error(`Failed at claimAll ${e.toString()}`);
        }
    }
    async claimQuest(eventId, castleId) {
        try {
            await this.request({ hangUpSystem: { getSonDispatchRewards: { eventId: eventId, id: castleId } } });
        }
        catch (e) {
            console.error(`Failed at claimQuest ${e.toString()}`);
        }
    }
    async sendQuest(eventId, castleId, sons) {
        try {
            const sonsSlots = [];
            sons.forEach((sonId, index) => sonsSlots.push({ slot: index + 1, sonId: sonId }));
            await this.request({
                hangUpSystem: {
                    sonDispatch: {
                        son_slot: sonsSlots,
                        isDouble: 0,
                        eventId: eventId,
                        id: castleId,
                    },
                },
            });
        }
        catch (e) {
            console.error(`Failed at sendQuest ${e.toString()}`);
        }
    }
    async refreshQuests(castleId) {
        try {
            const refresh = await this.request({ hangUpSystem: { refreshEvent: { type: 0, id: castleId } } });
            return refresh.u.hangUpSystem.info[0];
        }
        catch (e) {
            console.error(`Failed at refreshQuests ${e.toString()}`);
            return false;
        }
    }
    async levelUpCastle(castleId) {
        try {
            await this.request({ hangUpSystem: { upLevel: { id: castleId } } });
        }
        catch (e) {
            /* do nothing */
        }
    }
}
exports.Kingdom = Kingdom;
