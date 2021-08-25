"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchersAndAccolades = void 0;
const GoatResource_1 = require("../../GoatResource");
class ArchersAndAccolades extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ "huodong": { "hd297Info": [] } });
        return data.a.lovehuodong;
    }
    async buyArrows(count = 1) {
        await this.request({ "huodong": { "hd297Buy": { "num": count } } });
    }
    async shoot(count = 1) {
        await this.request({ "huodong": { "hd297Yao": { "num": count, "tip": 0 } } });
    }
    async findPlayer(id) {
        try {
            await this.request({ "huodong": { "hd297Guid": { "fuid": id } } });
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async sendMedals(count, id) {
        await this.request({ "huodong": { "hd297Send": { "num": count, "fuid": id } } });
    }
}
exports.ArchersAndAccolades = ArchersAndAccolades;
