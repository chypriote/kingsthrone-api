import { GoatResource } from '../GoatResource'
import { sample } from 'lodash'

export class Heroes extends GoatResource {
	async levelUpTen(id: number): Promise<void> {
		await this.request({ 'hero':{ 'upgradeTen':{ 'id':id } },'rsn':sample([
			'2anxaybnyy', '1qktrawrubr', '6xwbkxuwpwy', '2myabnqmhyx', '3zehnkpzwze',
			'3ehpwekepew', '6xwbkxuxbpx', '9rnsrmcnmi', '8jmairovjio', '8arkamiekk',
		]) })
	}
}
