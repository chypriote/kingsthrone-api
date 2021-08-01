import { goat } from './index'
import { DECREE_TYPE } from './types/ThroneRoom'

const handleAccount = async (server: string) => {
	goat._logout()
	await goat.account.createAccount(server)

	//upgrade oliver
	await goat.heroes.levelUpTen(1)
	//Claim main quest
	await goat.account.doMainQuestTask(2)
	await goat.rewards.claimLoginReward()
	await goat.rewards.claimGrowthFund(1)
	await goat.profile.sendTraining(1)

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

	await goat.throneRoom.getAllLevies()
	await goat.throneRoom.getAllDecreesResources(DECREE_TYPE.EXPERIENCE)

	//Getting maiden and son
	await goat.account.doMainQuestTask(4)
	await goat.account.doGuide(101)
	await goat.maidens.getAvailableVisits()
	await goat.maidens.visitRandomMaiden()
	await goat.account.doGuide(102)
	await goat.maidens.visitRandomMaiden()
	const sons = (await goat.profile.getGameInfos(true)).son.sonList
	const sonId = sons[0].id
	await goat.children.nameSon(sonId)
	await goat.children.raiseSon(sonId)

	//back to main room
	await goat.throneRoom.useSeal(3)
	await goat.throneRoom.getAllDecreesResources(DECREE_TYPE.EXPERIENCE)
	await goat.profile.levelUpKingdom()
	await goat.rewards.claimGrowthFund(2)
	await goat.rewards.claimFirstWeekRewards(1)

	//processions
	await goat.processions.getAvailableProcessions()
	await goat.processions.startProcession()
	await goat.processions.startProcession()
	await goat.processions.startProcession()
	await goat.account.doMainQuestTask(5)
	//use tomes
	await goat.items.useForHero(52, 1, 1)
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
	await goat.heroes.levelUpTen(10)
	await goat.account.doMainQuestTask(15)
	await goat.account.doMainQuestTask(16)
	await goat.heroes.levelUpTen(4)
	await goat.heroes.levelUpTen(4)
	await goat.heroes.levelUpTen(5)
	await goat.heroes.levelUpTen(5)
	await goat.heroes.levelUpTen(6)
	await goat.heroes.levelUpTen(6)
	await goat.account.doMainQuestTask(17)
	await goat.campaign.oneKeyPve()
	await goat.account.doCampaignGuide(40, 2, 6)
	await goat.account.doMainQuestTask(18)
	await goat.account.doMainQuestTask(19)
	await goat.account.doMainQuestTask(20)
	await goat.maidens.payVisit(3)
	await goat.account.doMainQuestTask(21)
	await goat.account.doMainQuestTask(22)
	console.log(`Finished ${server}`)
}

const levelUp = async () => {
	// for (const server of ['222', '333', '612', '614', '615', '617', '618', '619', '637']) {
	// 	try {
	// 	} catch (e) {
	// 		console.log(`Error ${server}`, e)
	// 	}
	// }
	goat._logout()
	await handleAccount('1094')

	console.log('Finished !')
}

levelUp().then(() => {
	process.exit()
})
