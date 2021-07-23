import { ACCOUNT_NAPOLEON, goat } from './src/goat'

const test = async () => {
	goat._setAccount(ACCOUNT_NAPOLEON)
	const events = (await goat.profile.getGameInfos()).huodonglist.all
	for (const event of events) {
		console.log(`${event.id},${event.title}`)
	}
}

test().then(() => { process.exit() })
