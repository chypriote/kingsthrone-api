import { ACCOUNT_NAPOLEON, goat } from './src/goat'

const test = async () => {
	goat._setAccount(ACCOUNT_NAPOLEON)
	console.log(JSON.stringify((await goat.profile.getGameInfos()).xunfang, null, 2))
}

test().then(() => { process.exit() })
