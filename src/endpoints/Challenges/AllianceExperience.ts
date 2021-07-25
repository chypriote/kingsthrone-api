import { GoatResource } from '../../GoatResource'
import { AllianceExperienceStatus } from '../../../types'

export class AllianceExperience extends GoatResource {
	async eventInfos(): Promise<AllianceExperienceStatus> {
		const data = await this.request({ 'huodong':{ 'hd250Info':[] },'rsn':'9zmrjjmjcnc' })
		return data.a.cbhuodong
	}
}
