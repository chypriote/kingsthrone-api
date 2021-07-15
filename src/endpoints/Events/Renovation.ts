import { GoatResource } from '../../GoatResource'
import { Item } from '../../../types/goat/Item'
import { Renovation as RenovationEndpoint } from '../../../types/Endpoints/Events/Renovation'

export class Renovation extends GoatResource implements RenovationEndpoint {
	async findEgg(): Promise<number> {
		const data = await this.request({ 'user': { 'inner_egg': [] }, 'rsn': '1ktukkqqkuu' })
		const egg = data.a.user.inner_egg.find((item: Item) => item.id === 1)
		if (!egg) {
			throw new Error('No gems found')
		}

		return egg.count
	}

	async claimEgg(): Promise<void> {
		await this.request({ 'user': { 'inner_rwd': [] }, 'rsn': '1ktukkqiewk' })
	}
}
