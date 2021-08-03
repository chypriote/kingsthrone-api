import { GoatResource } from '../../GoatResource'
import { DIYStoreStatus } from '../../../types/Events/DIYStore'

export class DIYStore extends GoatResource {
	async eventInfos(): Promise<DIYStoreStatus> {
		const data = await this.request({ 'huodong2':{ 'hd1156Info':[] } })
		return data.a.optionalPack
	}
	async setPackItem(pos: number, id: number, pack: number): Promise<void> {
		await this.request({ 'huodong2':{ 'hd1156SelectRwd':{ 'pos':pos,'dc':pack,'id':id } } })
	}
}
