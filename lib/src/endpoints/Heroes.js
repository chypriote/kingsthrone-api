"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroes = void 0;
const GoatResource_1 = require("../GoatResource");
class Heroes extends GoatResource_1.GoatResource {
    async levelUpTen(id) {
        await this.request({ 'hero': { 'upgradeTen': { 'id': id } } });
    }
}
exports.Heroes = Heroes;
