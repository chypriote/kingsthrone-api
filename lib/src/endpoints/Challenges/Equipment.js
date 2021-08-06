"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const GoatResource_1 = require("../../GoatResource");
class Equipment extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ huodong2: { hd1339Info: [] } });
        return {
            power: data.a.cbhuodong.EquipmentMatchingPower,
            powerlist: data.a.EquipmentMatchingPower.list,
            myPowerRid: data.a.cbhuodong.myPowerRid,
            rewards: data.u.cbhuodong.cbTaskStatus,
        };
    }
    async claimProgressReward(id) {
        await this.request({ huodong: { hdCbGetRwd: { huodongId: 1339, id: id } } });
    }
}
exports.Equipment = Equipment;
