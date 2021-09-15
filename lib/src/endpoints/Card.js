"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const GoatResource_1 = require("../GoatResource");
class Card extends GoatResource_1.GoatResource {
    async weekly() {
        await this.request({ 'fuli': { 'mooncard': { 'id': 0 } } });
    }
    async monthly() {
        await this.request({ 'fuli': { 'mooncard': { 'id': 1 } } });
    }
    async season() {
        await this.request({ 'fuli': { 'mooncard': { 'id': 2 } } });
    }
}
exports.Card = Card;
