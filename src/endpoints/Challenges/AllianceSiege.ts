import { GoatResource } from '../../GoatResource'
import { AllianceSiegeBattle, BATTLE_STATUS } from '../../../types'

export class AllianceSiege extends GoatResource {
	async eventInfos(): Promise<AllianceSiegeBattle> {
		const data = await this.request({ 'rsn':'5ywhevjahwy','kuaCLubBattle':{ 'getInfo':[] } })
		return data.a.kuaCLubBattle
	}

	async attackWall(): Promise<BATTLE_STATUS> {
		const data = await this.request({ 'rsn':'3zehkssffww','kuaCLubBattle':{ 'play':{ 'type':2,'uid':0,'num':1 } } })
		return data.a.type
	}
	async attackGeneral(): Promise<BATTLE_STATUS> {
		const data = await this.request({ 'rsn':'4fcghxxbihf','kuaCLubBattle':{ 'play':{ 'type':3,'uid':0,'num':1 } } })
		return data.a.type
	}
	async attackMember(uid: string): Promise<void> {
		await this.request({ 'rsn':'1tbqwwwaiu','kuaCLubBattle':{ 'play':{ 'type':4,'uid':uid,'num':1 } } })
	}

	async claimTaskReward(id: number): Promise<void> {
		await this.request({ 'rsn':'6sxwullglsy','kuaCLubBattle':{ 'getTaskRewards':{ 'id':id } } })
	}
	async buySiegeWeapon(count = 1): Promise<void> {
		await this.request({ 'rsn':'7yclsddsvlg','kuaCLubBattle':{ 'buyBattleNum':{ 'num':count } } }	)
	}
}
