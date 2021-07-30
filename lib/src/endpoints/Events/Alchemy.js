"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alchemy = void 0;
const GoatResource_1 = require("../../GoatResource");
class Alchemy extends GoatResource_1.GoatResource {
    async eventInfos() {
        const data = await this.request({ 'huodong': { 'hd1092Info': [] }, 'rsn': '1tbbkiiebr' });
        return data.a.alchemyHuoDong;
    }
    async getRanking() {
        const data = await this.request({ 'huodong': { 'hd1092Rank': [] }, 'rsn': '2myyaanlbwy' });
        return data.a.alchemyHuoDong.list;
    }
    async claimQuest(id) {
        await this.request({ 'huodong': { 'hd1092Task': { 'id': id } }, 'rsn': '4fccgibgcbg' });
    }
    async receiveGift(uid, son) {
        await this.request({ 'huodong': { 'hd1092Social': { 'type': 'receive', 'uid': uid, 'id': son } }, 'rsn': '2myyaabqbhh' });
    }
    async sengGift(uid, son) {
        await this.request({ 'huodong': { 'hd1092Social': { 'type': 'send', 'uid': uid, 'id': son } }, 'rsn': '9mrrtnitcsi' });
    }
    async trade(iron = 0, bottle = 0, maiden) {
        await this.request({ 'huodong': { 'hd1092GiveGift': { 'milk_num': iron, 'biscuits_num': bottle, 'id': maiden } }, 'rsn': '3ehhpkwhrke' });
    }
    async forge(shard = 0, ore = 0, hero) {
        await this.request({ 'huodong': { 'hd1092Forging': { 'refine_num': shard, 'coal_num': ore, 'id': hero } }, 'rsn': '9zmmrrcnmst' });
    }
}
exports.Alchemy = Alchemy;
