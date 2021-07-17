import { sample } from 'lodash'
import { GoatResource } from '../../GoatResource'
import { Item } from '../../../types/goat/Item'

const find_egg_rsn = [
	'1ktukkqqkuu',
	'7coydyvovg',
	'9zmrmrbrzts',
	'5wpjwyhrpf',
]
const claim_egg_rsn = [
	'1ktukkqiewk',
	'5jywwvheffh',
	'6sxwxwlwukg',
	'5wpjwyhrey',
]

export class Renovation extends GoatResource {
	async findEgg(): Promise<number> {
		const data = await this.request({ 'user': { 'inner_egg': [] }, 'rsn': sample(find_egg_rsn) })
		const egg = data.a.user.inner_egg.find((item: Item) => item.id === 1)
		if (!egg) {
			throw new Error('No gems found')
		}

		return egg.count
	}

	async claimEgg(): Promise<void> {
		await this.request({ 'user': { 'inner_rwd': [] }, 'rsn': sample(claim_egg_rsn) })
	}
}
