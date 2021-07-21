"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processions = void 0;
const GoatResource_1 = require("../GoatResource");
class Processions extends GoatResource_1.GoatResource {
    async getAvailableProcessions() {
        const next = await this.request({ 'user': { 'refxunfang': [] }, 'rsn': '4cmiixghbg' });
        return next.a.xunfang.xfInfo;
    }
    async startProcession() {
        //kind 2= gold id2= gold
        const visit = await this.request({ 'rsn': '9rsnniiijc', 'xunfang': { 'xunfan': { 'type': 0 } } });
        return {
            result: visit.a.xunfang.win.xfAll[0],
            luck: visit.a.xunfang.recover,
            status: visit.a.xunfang.xfInfo,
        };
    }
    async useGoodwillDraught(num = 1) {
        const items = await this.request({ 'rsn': '9mbrrjbsrc', 'xunfang': { 'recover': { num } } });
        return {
            items: items.u.item.itemList[0],
            status: items.a.xunfang.xfInfo,
        };
    }
    async setAutoDonation(value = 82, grain, gold) {
        //num = current luck, ySet = min luck
        const status = await this.request({
            'rsn': '4fhaibbigb', 'xunfang': {
                'yunshi': {
                    auto3: grain ? 1 : 0,
                    auto2: gold ? 1 : 0,
                    ysSet: value,
                },
            },
        });
        return status.xunfang.recover;
    }
}
exports.Processions = Processions;
