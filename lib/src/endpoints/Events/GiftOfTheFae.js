"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftOfTheFae = void 0;
const GoatResource_1 = require("../../GoatResource");
class GiftOfTheFae extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong2: { hd1299Info: [] } });
        return data.a.weekHangUp;
    }
    async openFreeTree() {
        await this.request({ huodong2: { hd1299OpenFreeGj: [] } });
    }
    async useQuickCollect(tree = 1) {
        await this.request({ huodong2: { hd1299Fast: { id: tree } } });
    }
    async useExtraOutput(tree = 1) {
        await this.request({ huodong2: { hd1299Extra: { id: tree } } });
    }
    async selectPoolReward(rwd = 1, pool = 1) {
        await this.request({ huodong2: { hd1299Choose: { idd: rwd, id: pool } } });
    }
    async pourDew(water, pool = 1) {
        await this.request({ huodong2: { hd1299ZhuShui: { num: water, id: pool } } });
    }
    async praiseTheSun(pool = 1) {
        await this.request({ huodong2: { hd1299GetHeChengOtherRwd: { id: pool } } });
    }
    async claimPoolItem(pool = 1) {
        await this.request({ huodong2: { hd1299getHeChengRwd: { id: pool } } });
    }
}
exports.GiftOfTheFae = GiftOfTheFae;
