"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const GoatResource_1 = require("../GoatResource");
class Account extends GoatResource_1.GoatResource {
    async createAccount(server) {
        this._goat._setServer(server);
        const player = await this._goat.profile.getGameInfos(true);
        if (player.user.user.name) {
            console.warn(`Found existing player named ${player.user.user.name} on server ${server}`);
            return player;
        }
        let name = `Raymundus ${server}`;
        try {
            name = await this.setName(name);
            if (!name) {
                console.log('exiting');
                process.exit();
            }
        }
        catch (e) {
            console.log('catching name error');
        }
        console.debug('Skipping guide');
        await this.request({ user: { adok: { label: '' } } });
        await this.request({ fuli: { answer: { code: 'tg' } } });
        await this.request({ guide: { guideUpguan: [] } });
        await this.request({ guide: { guide: { gnew: 1 } } });
        console.debug('Getting levies');
        await this.request({ guide: { guide: { gnew: 2 } } });
        await this.request({ fuli: { auto_supreme: [] } });
        await this.request({ user: { refjingying: [] } });
        await this.request({ user: { jingYing: { jyid: 2 } } });
        await this.request({ guide: { guide: { gnew: 3 } } });
        await this.request({ user: { jingYing: { jyid: 3 } } });
        await this.request({ guide: { guide: { gnew: 4 } } });
        await this.request({ user: { jingYing: { jyid: 4 } } });
        await this.request({ guide: { guide: { gnew: 5 } } });
        await this.request({ user: { adok: { label: '' } } });
        await this.request({ user: { adok: { label: 'jingying' } } });
        await this.request({ guide: { guide: { smap: 0, bmap: 1, mmap: 1 } } });
        console.debug('Campaign');
        await this.request({ user: { pve: [] } });
        await this.request({ guide: { guide: { gnew: 6 } } });
        await this.request({ user: { adok: { label: 'jingying' } } });
        await this.request({ user: { adok: { label: '' } } });
        await this.request({ user: { adok: { label: 'jingying' } } });
        await this.request({ guide: { guide: { gnew: 7 } } });
        console.debug('Upgrade Gerard');
        await this.request({ hero: { upgrade: { id: 2 } } });
        await this.request({ guide: { guide: { gnew: 7 } } });
        await this.request({ user: { adok: { label: '' } } });
        console.debug('Fight Boss');
        await this.request({ user: { pvb: { is_guide: 1, id: 2 } } });
        await this.request({ user: { adok: { label: '' } } });
        await this.request({ user: { adok: { label: '' } } });
        console.debug('Collect quest 1');
        await this.request({ task: { taskdo: { id: 1 } } });
        await this.request({ guide: { guide: { gnew: 8 } } });
        console.log(`Created ${name} on server ${server}`);
    }
    async getGeneratedName() {
        const name = await this.request({ guide: { randName: { sex: 1 } } });
        return name.a.system.randname.name;
    }
    async setName(name) {
        await this.request({ guide: { setUinfo: { sex: 1, name, job: 7 } } });
        return name;
    }
    async doMainQuestTask(id) {
        await this.request({ task: { taskdo: { id: id } } });
    }
    async getThrone() {
        const status = await this.request({ user: { refjingying: [] } });
        for (let i = 0; i < status.a.jingYing.army.num; i++) {
            await this.request({ user: { jingYing: { jyid: 4 } } });
        }
        for (let i = 0; i < status.a.jingYing.coin.num; i++) {
            await this.request({ user: { jingYing: { jyid: 2 } } });
        }
        for (let i = 0; i < status.a.jingYing.food.num; i++) {
            await this.request({ user: { jingYing: { jyid: 3 } } });
        }
    }
    async doCampaignGuide(smap, bmap, mmap) {
        await this.request({ guide: { guide: { smap, bmap, mmap } } });
    }
    async doGuide(id) {
        await this.request({ guide: { guide: { gnew: id } } });
    }
    async getFriendList() {
        const data = await this.request({ friends: { getPrivateChatData: [] } });
        return data.a.friends;
    }
}
exports.Account = Account;
