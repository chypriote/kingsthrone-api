import { GoatResource } from '../GoatResource'
import { sample } from 'lodash'

export class Campaign extends GoatResource {

	async oneKeyPve(): Promise<void> {
		await this.request({ 'user':{ 'onekey_pve':[] },'rsn':sample([
			'3zehnfsnnfw', '6sxwyglykkb', '9mrtimsinst', '5ywhryfrepe', '5jywefavfpe',
		]) })
	}
	async fightCampaignBoss(id: number): Promise<void> {
		await this.request({ 'user':{ 'pvb':{ 'id':id } },'rsn':'7xycvgdspov' })
	}
}
