import { GoatResource } from '../GoatResource'
import { InLaw, Spouse } from '../../types'

export class Children extends GoatResource {
	//Sons
	async getSonsStatus(): Promise<any> {
		const data = await this.request({ 'xingqin': { 'xingqinsuc': [] }, 'rsn': '4fcgmahfhxf' })
		return data.a.xingqin
	}

	async raiseAllSons(): Promise<boolean> {
		try {
			await this.request({ 'rsn': '3hfkkwrshp', 'son': { 'allplay': [] } })
		} catch (e) {return false}
		return true
	}
	async raiseSon(id: number): Promise<void> {
		await this.request({ 'rsn':'8maoemroveo','son':{ 'play':{ 'id': id } } })
	}

	async nameSon(id: number): Promise<void> {
		const randName = await this.request({ 'rsn': '7coycpvlov', 'guide': { 'sonRandName': { 'id': id } } })
		const name = randName.a.system.randname.name
		await this.request({ 'rsn': '6wuxwkywkb', 'son': { 'sonname': { 'name': name, 'id': id } } })
	}

	async useEnergyDraught(son: number, num: number): Promise<void> {
		await this.request({ 'rsn': '3hkehwrepf', 'son': { 'OneTapFood': { 'sid': son, 'num': num } } })
	}

	async evaluateSon(son: number): Promise<void> {
		await this.request({ 'rsn': '7yclgxsgvlp', 'son': { 'keju': { 'id': son } } })
	}

	//InLaws
	async getInLaws(): Promise<InLaw[]> {
		const friends = await this.request({ 'friends': { 'getPrivateChatData': [] }, 'rsn': '7yvovxpxyp' })
		return friends.a.friends.qjlist
	}
	async visitInLaw(uid: number): Promise<void> {
		await this.request({ 'friends': { 'qjvisit': { 'fuid': uid } }, 'rsn': '3hzewhwzkp' })
	}
	async visitInLaws(): Promise<void> {
		await this.request({ 'friends':{ 'qjvisit':{ 'fuid':0 } },'rsn':'4acbmmxgfmg' })
	}

	//Marriage
	async getProposals(): Promise<Spouse[]> {
		const data = await this.request({ 'rsn':'8maaovakrxm','son':{ 'getTiqin':[] } })
		return data.a.son.qList
	}
	async acceptProposal(son: number, partner: number, uid: number, type = 2): Promise<void> {
		//type 2= dowry, 1= gems ?
		await this.request({ 'rsn':'5wppjpvrae','son':{ 'agree':{ 'mysid':son,'sid':partner,'uid':uid,'type': type } } })
	}
	async matchMaker(son: number): Promise<Spouse[]> {
		const data = await this.request({ 'rsn':'9mrrtjrjtrc','son':{ 'zhaoqin':{ 'id':son } } })
		return data.a.son.cList.list
	}
	async marry(son: number, partner: number, uid: number, type = 2): Promise<void> {
		await this.request({ 'rsn':'7xyycgxgscy','son':{ 'jiehun':{ 'mysid':son,'sid':partner,'uid':uid,'type': type } } })
	}
	async propose(son: number, type = 2): Promise<void> {
		await this.request({ 'rsn':'7cooxvygsg','son':{ 'tiqin':{ 'type':type,'isPush':1,'uid':0,'sid':son } } })
	}
}
