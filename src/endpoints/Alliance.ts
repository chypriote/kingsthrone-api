import { GoatResource } from '../GoatResource'
import { AllianceBossInfo, AllianceInfo, XSBattleInfo, XSBattleStatus, Alliance as AllianceFull, XSRewardInfos } from '../../types'
import { FIGHT_STATUS } from '../../types/WorldBoss'

interface UsedHero {
	id: number
	h: number
	f: number
}

export class Alliance extends GoatResource {
	async getAllianceInfos(): Promise<AllianceFull> {
		const data = await this.request({ club: { shopList: [], clubInfo: [] }, rsn: '4fcghcixmfb' })
		return data.a.club
	}
	async contributeAlliance(): Promise<boolean> {
		try {
			await this.request({ club: { dayGongXian: { dcid: 5 } } })
		} catch (e) {
			return false
		}
		return true
	}

	async getAllianceBossInfo(): Promise<{ bosses: AllianceBossInfo[]; heroes: UsedHero[] }> {
		const data = await this.request({ club: { clubBossInfo: [] } })

		return {
			bosses: data.a.club.bossInfo,
			heroes: data.a.club.bossft,
		}
	}

	async fightAllianceBoss(boss: number, hero: number): Promise<FIGHT_STATUS> {
		try {
			await this.request({ club: { clubBossPK: { cbid: boss, id: hero } } })
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
		const alliances = await this.request({ club: { clubList: [] } })
		return alliances.a.club.clubList
	}

	async buyAllianceShopItem(id: number): Promise<void> {
		await this.request({ club: { shopBuy: { id: id } } })
	}

	async getXServerBattleInfos(): Promise<XSBattleInfo> {
		const data = await this.request({ club: { kuaPKinfo: [] } })
		return data.a.club.clubKuaInfo
	}
	async getXServerFight(): Promise<XSBattleStatus> {
		const data = await this.request({ club: { kuaPKCszr: [] }, rsn: '6sxwgxpbwbg' })
		return {
			status: data.a.club.clubKuaCszr,
			heroes: data.a.club.kuaHeroList,
		}
	}
	async dispatchXServerHero(id: number): Promise<void> {
		await this.request({ club: { kuaPKAdd: { hid: id } }, rsn: '2myaxyxlabq' })
	}
	async getXServerRewardInfos(): Promise<XSRewardInfos> {
		const data = await this.request({ club: { kuaPKrwdinfo: [] }, rsn: '1qktbbkqiiu' })
		return data.a.club.clubKuapkrwd
	}
	async claimXServerReward(): Promise<void> {
		await this.request({ club: { kuaPKrwdget: { id: 1 } }, rsn: '8arjeeoxeo' })
	}
}
