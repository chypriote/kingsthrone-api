import { GoatResource } from '../../GoatResource'
import { MysteriousIslandStatus, MysteriousIslandFight } from '../../../types'

export class MysteriousIsland extends GoatResource {
	async eventInfos(): Promise<MysteriousIslandStatus> {
		const data = await this.request({ 'huodong':{ 'hd1089Info':[] } })
		return data.a.floatingIsland
	}
	async selectIsland(id: number): Promise<MysteriousIslandStatus> {
		const data = await this.request({ 'huodong':{ 'hd1089Select':{ 'floorIndex':id } } })
		return data.a.floatingIsland
	}
	async selectHero(id: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd1089SelectHero':{ 'heroId':id } } })
	}
	async fight(id: number): Promise<MysteriousIslandFight> {
		const data = await this.request({ 'huodong':{ 'hd1089Fight':{ 'heroId':id } } })
		return data.a.floatingIsland
	}
	async getLevelReward(id: number): Promise<void> {
		await this.request({ 'huodong':{ 'hd1089GetRwd':{ 'id':id } } })
	}
}
