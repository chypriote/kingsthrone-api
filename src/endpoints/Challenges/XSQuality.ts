import { GoatResource } from '../../GoatResource'
import { XSQualityCurrent, XSQualityStatus } from '../../../types'

export class XSQuality extends GoatResource {
	async eventInfos(): Promise<XSQualityStatus> {
		const data = await this.request({ huodong: { hd1138Info: [] } })
		return { ...data.a.kuacbhuodong, rewards: data.u.cbhuodong.cbTaskStatus }
	}
	async getRankings(): Promise<XSQualityCurrent> {
		const data = await this.request({ 'huodong':{ 'hd1138UserRank':[] } })
		return data.a.kuacbhuodong
	}
	async claimProgressReward(id: number): Promise<void> {
		await this.request({ huodong: { hdCbGetRwd: { huodongId: 1138, id: id } } })
	}
}
