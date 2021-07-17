import { goat } from './src/goat'
import { ACCOUNT_GAUTIER } from './src/accounts/gautier'

const test = async () => {
	goat._setAccount(ACCOUNT_GAUTIER)
	await goat.profile.getGameInfos()
}

test().then(() => { process.exit() })
