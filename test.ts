import { ACCOUNT_NAPOLEON, goat } from './src/goat'

const test = async () => {
	goat._setAccount(ACCOUNT_NAPOLEON)
	for (let i = 1; i < 5; i++) {
		goat._setServer(i.toString())
		const ranks = await goat.rankings.getLadderKP(true)
		console.log(ranks[0])
	}
}

test().then(() => {
	process.exit()
})
