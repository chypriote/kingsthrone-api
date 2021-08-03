"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renovation = void 0;
const GoatResource_1 = require("../../GoatResource");
class Renovation extends GoatResource_1.GoatResource {
    async findEgg() {
        const data = await this.request({ user: { inner_egg: [] } });
        const egg = data.a.user.inner_egg.find((item) => item.id === 1);
        if (!egg) {
            throw new Error('No gems found');
        }
        return egg.count;
    }
    async claimEgg() {
        await this.request({ user: { inner_rwd: [] } });
    }
}
exports.Renovation = Renovation;
