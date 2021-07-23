"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renovation = void 0;
const lodash_1 = require("lodash");
const GoatResource_1 = require("../../GoatResource");
const find_egg_rsn = [
    '1ktukkqqkuu', '7coydyvovg', '9zmrmrbrzts',
    '5wpjwyhrpf', '8arjjiavoe', '7xycgyvgcvp',
    '2yaqwwbbwly', '7coglsgdlg',
];
const claim_egg_rsn = [
    '1ktukkqiewk', '5jywwvheffh', '6sxwxwlwukg',
    '5wpjwyhrey', '4afcammvbbb', '9mrtjrzmrmi',
    '6sxwuussybb', '4afcvfxxvfm',
];
class Renovation extends GoatResource_1.GoatResource {
    async findEgg() {
        const data = await this.request({ 'user': { 'inner_egg': [] }, 'rsn': lodash_1.sample(find_egg_rsn) });
        const egg = data.a.user.inner_egg.find((item) => item.id === 1);
        if (!egg) {
            throw new Error('No gems found');
        }
        return egg.count;
    }
    async claimEgg() {
        await this.request({ 'user': { 'inner_rwd': [] }, 'rsn': lodash_1.sample(claim_egg_rsn) });
    }
}
exports.Renovation = Renovation;
