import { GoatResource } from '../GoatResource'
import { StaminaResult, VisitsStatus, Wife } from '../../types'

export class Maidens extends GoatResource {
	async visitRandomMaiden(): Promise<Wife> {
		const visit = await this.request({ wife: { sjxo: [] } })
		return visit.u.wife.wifeList[0]
	}

	async useStaminaDraught(num = 1): Promise<StaminaResult> {
		const items = await this.request({ wife: { weige: { num } } })

		return {
			items: items.u.item.itemList[0],
			status: items.a.wife.jingLi,
		}
	}

	async getAvailableVisits(): Promise<VisitsStatus> {
		const next = await this.request({ user: { refwife: [] } })

		return next.a.wife.jingLi
	}
	async payVisit(id: number): Promise<Wife> {
		const visit = await this.request({ wife: { xxoo: { id: id } } })
		return visit.u.wife.wifeList[0]
	}
}
