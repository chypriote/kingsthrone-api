import { GoatResource } from '../GoatResource'

export class Card extends GoatResource {
	async weekly(): Promise<void> {
		await this.request({ 'fuli':{ 'mooncard':{ 'id': 0 } } })
	}
	async monthly(): Promise<void> {
		await this.request({ 'fuli':{ 'mooncard':{ 'id': 1 } } })
	}
	async season(): Promise<void> {
		await this.request({ 'fuli':{ 'mooncard':{ 'id': 2 } } })
	}
}
