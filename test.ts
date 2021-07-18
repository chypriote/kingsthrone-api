import { goat } from './src/goat'
import { ACCOUNT_GAUTIER } from './src/accounts/gautier'

const test = async () => {
	goat._setAccount(ACCOUNT_GAUTIER)
	console.log((await goat.profile.getGameInfos()).hero.heroList)
}

test().then(() => { process.exit() })
