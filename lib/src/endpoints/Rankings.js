"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rankings = void 0;
const GoatResource_1 = require("../GoatResource");
class Rankings extends GoatResource_1.GoatResource {
    async payHomageKP() {
        await this.request({ 'rsn': '5jwryfwjhjy', 'ranking': { 'mobai': { 'type': 1 } } });
    }
    async payHomageCampaign() {
        await this.request({ 'rsn': '3hfknpzerw', 'ranking': { 'mobai': { 'type': 2 } } });
    }
    async payHomageIntimacy() {
        await this.request({ 'rsn': '4cmivgafxm', 'ranking': { 'mobai': { 'type': 3 } } });
    }
}
exports.Rankings = Rankings;
