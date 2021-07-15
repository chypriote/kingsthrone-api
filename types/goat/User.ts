export interface User {
	uid: string
	name: string
	job: number
	sex: number
	level: number
	vip: number
	chenghao: number
	headframe: number
	headType: number
	headId: number
	vipStatus: number
	shili: number
	clubid: string
	clubname: string
	frame: number
	head: number
	chatframe: number
	rid: number
	num: number
}

export interface UserProfile extends User {
	id: string
	name: string
	level: number
	sex: number
	job: number
	vip: number
	exp: number
	//Display: Drusilla Chap 97 (5), Afk 39 (5), Jin 105 (2)
	bmap: number //campaign chapter// drusila 97 afk 39  jin 105
	mmap: number //chapter completed // drusila 486 afk 195 jin 523
	smap: number //battle in mission drusila 3880  afk 1557  jin 4176
	// Current chapter: bmap
	// Current mission: mmap - 5 * bmap : Drusila 1 afk 0 jin -2
	// chap72map1=(mmap 356, smap 2840, bmap 72)
	ep: {
		e1: number //Military
		e2: number //Gold
		e3: number //Provision
		e4: number //Inspiration
	}
	shili: number //kingdomPower
	love: number //Intimacy
	clubid: string
	clubname: string
	chenghao: number //title
	xuanyan: string
	chlist: {id: number}[] //titles list
	son_num: number //Children
	wife_num: number //Maidens
	hero_num: number //Heroes
	headType: number
	headId: number
	vipStatus: number
	set?: number
}
