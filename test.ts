import { goat } from './src/goat'
import { demophlos } from './src/accounts/gautier'

const test = async () => {
	goat.config = demophlos
	for (let i = 1; i < 20; i++) {
		await goat.rankings.getLadderKP(true)
		i += 3
	}
}

test().then(() => {
	process.exit()
})
