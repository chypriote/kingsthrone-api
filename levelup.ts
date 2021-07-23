import { goat } from './index'
import { DECREE_TYPE } from './types'

const levelUp = async () => {
	await goat.account.createAccount('741')

	//upgrade oliver
	await goat.heroes.levelUpTen(1)
	//Claim main quest
	await goat.account.doMainQuestTask(2)

	// do campaign
	await goat.campaign.oneKeyPve()
	await goat.account.doCampaignGuide(8, 1, 2)
	await goat.campaign.oneKeyPve()
	await goat.account.doCampaignGuide(16, 1, 3)
	await goat.campaign.oneKeyPve()
	await goat.account.doCampaignGuide(24, 1, 4)
	await goat.campaign.oneKeyPve()
	await goat.account.doCampaignGuide(32, 1, 5)
	await goat.campaign.oneKeyPve()
	await goat.account.doCampaignGuide(40, 1, 6)
	await goat.campaign.fightCampaignBoss(1)
	await goat.account.doCampaignGuide(40, 2, 6)
	await goat.account.doMainQuestTask(3)

	//Getting maiden and son
	await goat.account.doMainQuestTask(4)
	await goat.account.doGuide(101)
	await goat.maidens.getAvailableVisits()
	await goat.maidens.visitRandomMaiden()
	await goat.account.doGuide(102)
	await goat.maidens.visitRandomMaiden()
	const son = await goat.children._unsafe({ 'xingqin':{ 'xingqinsuc':[] },'rsn':'9zmrcnttnmt' })
	const sonId = son.u.son.sonList[0].id
	await goat.children.nameSon(sonId)
	await goat.children.raiseSon(sonId)

	//back to main room
	await goat.throneRoom._unsafe({ 'user':{ 'zhengWuLing':{ 'num':1 } },'rsn':'5wpfwypfee' })
	await goat.throneRoom.getDecree(DECREE_TYPE.EXPERIENCE)
	await goat.throneRoom._unsafe({ 'user':{ 'shengguan':[] },'rsn':'7cogcyoosl' })

	//processions
	await goat.processions.getAvailableProcessions()
	await goat.processions.startProcession()
	await goat.processions.startProcession()
	await goat.processions.startProcession()
	await goat.account.doMainQuestTask(5)
	//use tomes
	await goat.items.useForHero(53, 1, 1)
	await goat.account.doMainQuestTask(6)
	//level up heroes
	await goat.account.getThrone()
	await goat.account.doMainQuestTask(7)
	await goat.heroes.levelUpTen(1)
	await goat.account.doMainQuestTask(8)
	await goat.account.doMainQuestTask(9)
	await goat.heroes.levelUpTen(3)
	await goat.heroes.levelUpTen(3)
	await goat.heroes.levelUpTen(2)
	await goat.heroes.levelUpTen(2)
	await goat.account.doMainQuestTask(10)
	await goat.account.doMainQuestTask(11)
	await goat.account.doMainQuestTask(12)
	await goat.account.doMainQuestTask(13)
	await goat.account.doMainQuestTask(14)
	await goat.heroes.levelUpTen(10)
	await goat.heroes.levelUpTen(10)
	await goat.account.doMainQuestTask(15)
	await goat.account.doMainQuestTask(16)
	await goat.heroes.levelUpTen(4)
	await goat.heroes.levelUpTen(4)
	await goat.heroes.levelUpTen(6)
	await goat.heroes.levelUpTen(6)
	await goat.account.doMainQuestTask(17)
}

levelUp().then(() => { process.exit() })
