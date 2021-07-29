import { ACCOUNT_NAPOLEON, goat } from './src/goat'
import { find } from 'lodash'
import { CHERISHED_WISH_TYPE, CherishedWishInfo, CherishedWishReward } from './types/Events/RenownedMerchant'

async function handleQuest(info: CherishedWishInfo, rewards: CherishedWishReward[], today: number, type: CHERISHED_WISH_TYPE): Promise<void> {
	const optional = find(info.optional, op => op.dc === today)

	if (!optional) {
		const options = find(rewards, r => r.id === today)
		if (!options) { return console.log(`Could not find options for day ${today}, type ${type}`) }

		for (const rwd of options.optionRwd) {
			await goat.events.renownedMerchant.setWishTreeReward(1, today, rwd.pos)
			console.log('Set wish tree reward')
		}
	}

	const todaysRwd = find(info.rwd, r => r.id === today)
	if (!todaysRwd || todaysRwd.status === 1) { return }
	try {
		await goat.events.renownedMerchant.getWishTreeReward(type)
		console.log(`Claimed login reward of for day ${today} of type ${type}`)
	} catch (e) {/*do nothing*/}
}

const test = async () => {
	goat._setAccount(ACCOUNT_NAPOLEON)

	const wishTree = await goat.events.renownedMerchant.wishTreeInfos()
	const [signIn, gems, vip] = wishTree.info
	const today = wishTree.info[wishTree.info.length - 1].today
	await handleQuest(signIn, wishTree.cfg.sign_rwd, today, CHERISHED_WISH_TYPE.SIGN_IN)
	await handleQuest(gems, wishTree.cfg.gems_rwd, today, CHERISHED_WISH_TYPE.GEMS)
	await handleQuest(vip, wishTree.cfg.vip_rwd, today, CHERISHED_WISH_TYPE.VIP)

	const topUp = await goat.events.renownedMerchant.continualTopUpInfos()
	if (!topUp.hasGetBox) {
		await goat.events.renownedMerchant.getContinualTopUp()
	}

	const loginRewards = await goat.events.renownedMerchant.loginRewardsInfo()

	for (const daily of loginRewards.cfg.dayTasks) {
		for (const task of daily.task_id) {
			try {
				await goat.events.renownedMerchant.getTaskReward(daily.day, task)
				console.log(`Claimed reward of task ${task} of day ${daily.day}`)
			} catch (e) {/*do nothing*/}
		}
	}
}

test().then(() => { process.exit() })
