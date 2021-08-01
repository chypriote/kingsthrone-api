import { GoatResource } from '../GoatResource'
import { GoodwillResult, LuckStatus, ProcessionResult, ProcessionsStatus } from '../../types'

export class Processions extends GoatResource {
	async getAvailableProcessions(): Promise<ProcessionsStatus> {
		const next = await this.request({ user: { refxunfang: [] } })

		return next.a.xunfang.xfInfo
	}

	async startProcession(): Promise<ProcessionResult> {
		//kind 2= gold id2= gold
		const visit = await this.request({ xunfang: { xunfan: { type: 0 } } })

		return {
			result: visit.a.xunfang.win.xfAll[0],
			luck: visit.a.xunfang.recover,
			status: visit.a.xunfang.xfInfo,
		}
	}

	async useGoodwillDraught(num = 1): Promise<GoodwillResult> {
		//id 72 goodwill
		const items = await this.request({ xunfang: { recover: { num } } })

		return {
			items: items.u.item.itemList[0],
			status: items.a.xunfang.xfInfo,
		}
	}

	async setAutoDonation(value = 82, grain: boolean, gold: boolean): Promise<LuckStatus> {
		//num = current luck, ySet = min luck
		const status = await this.request({
			xunfang: {
				yunshi: {
					auto3: grain ? 1 : 0,
					auto2: gold ? 1 : 0,
					ysSet: value,
				},
			},
		})

		return status.xunfang.recover
	}
}
