import { goat } from './src/goat'
import { ACCOUNT_GAUTIER } from './src/accounts/gautier'

const test = async () => {
	await goat.profile.login(ACCOUNT_GAUTIER)
}

test().then(() => { process.exit() })
