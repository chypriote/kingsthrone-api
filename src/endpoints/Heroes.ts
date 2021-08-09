import { GoatResource } from '../GoatResource'

export class Heroes extends GoatResource {
	async levelUpTen(id: number): Promise<void> {
		await this.request({ 'hero': { 'upgradeTen': { 'id': id } } })
	}
}
