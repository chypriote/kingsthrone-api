import { GoatResource } from '../../GoatResource'
import { Item } from '../../../types'

export class Renovation extends GoatResource {
	async findEgg(): Promise<number> {
		const data = await this.request({ user: { inner_egg: [] } })
		const egg = data.a.user.inner_egg.find((item: Item) => item.id === 1)
		if (!egg) {
			throw new Error('No gems found')
		}

		return egg.count
	}

	async claimEgg(): Promise<void> {
		await this.request({ user: { inner_rwd: [] } })
	}
}
