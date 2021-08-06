"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuntersTavern = void 0;
const GoatResource_1 = require("../../GoatResource");
class HuntersTavern extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd1091Info': [] } });
        return data.a.floatingIslandEgg;
    }
}
exports.HuntersTavern = HuntersTavern;
