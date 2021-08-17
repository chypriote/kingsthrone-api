import { GoatResource } from '../../GoatResource'
import { ArchersAndAccoladesStatus } from '../../../types/Events/ArchersAndAccolades'

export class ArchersAndAccolades extends GoatResource {
	async eventInfos(): Promise<ArchersAndAccoladesStatus> {
		const data = await this.request({"huodong":{"hd297Info":[]}})
		return data.a.lovehuodong
	}
	async buyArrows(count: number = 1): Promise<void> {
		await this.request({"huodong":{"hd297Buy":{"num":count}}})
	}
	async shoot(count: number = 1): Promise<void> {
		await this.request({"huodong":{"hd297Yao":{"num":count,"tip":0}}})
	}
	async findPlayer(id: string): Promise<boolean> {
		try {
			await this.request({"huodong":{"hd297Guid":{"fuid":id}}})
			return true
		} catch (e) {return false}
	}
	async sendMedals(count: number, id: string): Promise<void> {
		await this.request({"huodong":{"hd297Send":{"num": count,"fuid":id}}})
	}
}
