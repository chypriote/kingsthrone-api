import { GoatResource } from '../GoatResource'
import { DECREE_TYPE, LEVEE_TYPE } from '../../types'

export class ThroneRoom extends GoatResource {
	//Levies
	async getCoins(): Promise<void> {
		await this.request({ 'user':{ 'jingYing':{ 'jyid':LEVEE_TYPE.COIN } },'rsn':'7cogcyxgoy' })
	}
	async getArmy(): Promise<void> {
		await this.request({ 'user':{ 'jingYing':{ 'jyid':LEVEE_TYPE.ARMY } },'rsn':'6sxwyglskxg' })
	}
	async getGrain(): Promise<void> {
		await this.request({ 'user':{ 'jingYing':{ 'jyid':LEVEE_TYPE.GRAIN } },'rsn':'3hkfhezfke' })
	}
	async loopAllLevies(): Promise<void> {
		const status = await this.request({ 'user':{ 'refjingying':[] },'rsn':'5jywefajvyr' })

		for (let i=0; i < status.a.jingYing.army.num; i++) {
			await this.getArmy()
		}
		for (let i=0; i < status.a.jingYing.coin.num; i++) {
			await this.getCoins()
		}
		for (let i=0; i < status.a.jingYing.food.num; i++) {
			await this.getGrain()
		}
	}
	async getAllLevies(): Promise<boolean> {
		try {
			await this.request({ 'user': { 'jingYingAll': [] }, 'rsn': '1tabbiiurr' })
		} catch (e) {return false}
		return true
	}

	//Decrees
	async getAllDecreesResources(type: DECREE_TYPE): Promise<boolean> {
		try {
			const data = await this.request({ 'user': { 'yjZhengWu': { 'act': type } }, 'rsn': '1tabbiitbi' })
			return !!data.a.msgwin
		} catch (e) {
			return false
		}
	}
	async getDecree(type: DECREE_TYPE): Promise<void> {
		await this.request({ 'user':{ 'zhengWu':{ 'act':type } },'rsn':'1qktrawbuwr' })
	}
}
