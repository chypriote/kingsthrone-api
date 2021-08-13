import { GoatResource } from '../../GoatResource'
import { ContinualTopUpStatus, SparksUnderMoonlightStatus } from '../../../types'
import { QUEST_TYPE, SPARKS_ITEM_TYPE } from '../../../types/Events/SparksUnderMoonlight'

export class SparksUnderMoonlight extends GoatResource {
	async eventInfos(): Promise<SparksUnderMoonlightStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1250Info':[] } })
		return data.a.NewValentinesDay
	}

	async claimQuestReward(type: QUEST_TYPE, id: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1250QuestRwd':{ 'type':type,'id':id } } })
	}
	async donateItem(type: SPARKS_ITEM_TYPE, count: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1250Donate':[{ 'type':SPARKS_ITEM_TYPE,'num':count }] } })
	}

	/** Top Up */
	async continualTopUpInfos(): Promise<ContinualTopUpStatus> {
		const data = await this.request({ huodong2: { hd1251Info: [] } })
		return data.a.czhuodong.NewLoverDay
	}
	async getContinualTopUp(): Promise<void> {
		await this.request({ huodong2: { hd1251GetBox: [] } })
	}
}
