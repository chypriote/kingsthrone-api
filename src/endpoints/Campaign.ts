import { GoatResource } from '../GoatResource'

export class Campaign extends GoatResource {
	async oneKeyPve(): Promise<void> {
		await this.request({ user: { onekey_pve: [] } })
	}
	async fightCampaignBoss(id: number): Promise<void> {
		await this.request({ user: { pvb: { id: id } } })
	}
}
