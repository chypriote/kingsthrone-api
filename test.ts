import { ACCOUNT_NAPOLEON, goat } from './src/goat'

const test = async () => {
	goat._setAccount(ACCOUNT_NAPOLEON)
	console.log(await goat.hallOfFame.getHoFInfo())
}

test().then(() => {
	process.exit()
})
