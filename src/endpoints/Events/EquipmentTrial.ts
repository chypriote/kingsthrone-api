import { GoatResource } from '../../GoatResource'
import {
	EquipmentMatchingPower,
	EquipmentMatchingRank,
	EquipmentTrialStatus, EquipmentTrialWheel
} from '../../../types/Events/EquipmentTrial'
import { ContinualTopUpStatus, EventLimitedOffers } from '../../../types'

export class EquipmentTrial extends GoatResource{
	async eventInfos(): Promise<EquipmentTrialStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1332Info':[] } })
		return {
			event: data.a.EquipmentMatching,
			wheel: data.a.EquipmentMatchingDraw,
			limitedOffer: data.a.EquipmentMatchingGift,
			ranking: data.a.EquipmentMatchingPower.list,
		}
	}

	async claimQuest(type: number, daily = 0): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1332GetTaskRewards':{ 'type': type,'is_every': daily } } })
	}
	async claimProgressChest(id: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1332GetRwd':{ 'id': id } } })
	}

	/** Equipment Wheel */
	async equipmentWheelInfo(): Promise<EquipmentTrialWheel> {
		const data = await this.request({ 'huodong2':{ 'hd1334Info':[] } })
		return data.a.EquipmentMatchingDraw
	}
	async selectReward(key: number, id: number): Promise<void> {
		//key = item position, id = wheel position 2top 1bot
		await this.request({ 'huodong2':{ 'hd1334Choose':{ 'key': key,'id': id } } })
	}
	async buyWarriorToken(count = 1): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1334Buy':{ 'num':count } } })
	}
	async spinWheel(count: number): Promise<void> {
		await this.request({ 'huodong2': { 'hd1334Chou': { 'num': count } } })
	}
	async equipmentTrialRank(): Promise<EquipmentMatchingRank[]> {
		const data = await this.request({ 'huodong2':{ 'hd1332Rank':[] } })
		return data.a.EquipmentMatching
	}

	async equipmentPowerRanking(): Promise<EquipmentMatchingPower> {
		const data = await this.request({ 'huodong2':{ 'hd1339Info':[] } })
		return data.a.cbhuodong.EquipmentMatchingPower.cfg
	}
	/** Top Up */
	async continualTopUpInfos(): Promise<ContinualTopUpStatus> {
		const data = await this.request({ 'huodong2': { 'hd1336Info': [] } })
		return data.a.czhuodong.EquipmentMatchingDay
	}
	async getContinualTopUp(): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1336GetBox':[] } })
	}
	/** Limited Offer */
	async limitedOfferInfo(): Promise<EventLimitedOffers> {
		const data = await this.request({ 'huodong2':{ 'hd1335Info':[] } })
		return data.a.EquipmentMatchingGift
	}
	async buyLimitedOffer(id: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1335BuyGift':{ 'id':id } } })
	}
}
