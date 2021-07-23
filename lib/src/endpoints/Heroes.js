"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroes = void 0;
const GoatResource_1 = require("../GoatResource");
const lodash_1 = require("lodash");
class Heroes extends GoatResource_1.GoatResource {
    async levelUpTen(id) {
        await this.request({ 'hero': { 'upgradeTen': { 'id': id } }, 'rsn': lodash_1.sample([
                '2anxaybnyy', '1qktrawrubr', '6xwbkxuwpwy', '2myabnqmhyx', '3zehnkpzwze',
                '3ehpwekepew', '6xwbkxuxbpx', '9rnsrmcnmi', '8jmairovjio', '8arkamiekk',
            ]) });
    }
}
exports.Heroes = Heroes;
