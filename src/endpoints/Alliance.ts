import { GoatResource } from '../GoatResource'
import { AllianceBossInfo, AllianceInfo, XSBattleInfo, XSBattleStatus } from '../../types/Alliance'
import { FIGHT_STATUS } from '../../types/WorldBoss'

export class Alliance extends GoatResource {
	async contributeAlliance(): Promise<boolean> {
		try {
			await this.request({ 'club': { 'dayGongXian': { 'dcid': 5 } }, 'rsn': '3hfkksnwfn' })
		} catch (e) {
			return false
		}
		return true
	}

	async getAllianceBossInfo(): Promise<AllianceBossInfo[]> {
		const data = await this.request({ 'club': { 'clubBossInfo': [] }, 'rsn': '5wfppaeavy' })

		return data.a.club.bossInfo
	}

	async fightAllianceBoss(boss: number, hero: number): Promise<FIGHT_STATUS> {
		try {
			await this.request({ 'club': { 'clubBossPK': { 'cbid': boss, 'id': hero } }, 'rsn': '4acbfaxfaxf' })
		} catch (e) {
			const msg = e.toString()
			if (msg === 'Error: The battle has ended') {
				return FIGHT_STATUS.BATTLE_ENDED
			}
			if (msg === 'Error: The hero is resting') {
				return FIGHT_STATUS.HERO_RESTING
			}
			if (msg === 'Error: The boss has been killed') {
				return FIGHT_STATUS.BOSS_KILLED
			}
			console.log(msg)
		}
		return FIGHT_STATUS.ONGOING
	}

	async getLadder(): Promise<AllianceInfo[]> {
		const alliances = await this.request({ club: { clubList: [] }, rsn: '3zhpsspfrse' })
		return alliances.a.club.clubList
	}

	async getXServerBattleInfos(): Promise<XSBattleInfo> {
		const data = await this.request({ 'club': { 'kuaPKinfo': [] }, 'rsn': '4fcghcfmimb' })
		return data.a.club.clubKuaInfo
	}
	async getXServerFight(): Promise<XSBattleStatus> {
		const data = await this.request({ 'club':{ 'kuaPKCszr':[] },'rsn':'6sxwgxpbwbg' })
		return {
			status: data.a.club.clubKuaCszr,
			heroes: data.a.club.kuaHeroList,
		}
	}
	async dispatchXServerHero(id: number): Promise<void> {
		await this.request({ 'club':{ 'kuaPKAdd':{ 'hid':id } },'rsn':'2myaxyxlabq' })
	}
}
