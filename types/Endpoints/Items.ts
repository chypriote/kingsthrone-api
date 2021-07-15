import { GoatResource } from '../GoatResource'
import { Item } from '../goat/Item'

export interface Items extends GoatResource {
	getBag(): Promise<Item[]>
	use(item: number, count: number): Promise<Item>
	combine(item: number, count: number): Promise<Item[]>
}
