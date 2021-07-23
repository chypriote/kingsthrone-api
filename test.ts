import { ACCOUNT_NAPOLEON, goat } from './src/goat'

const test = async () => {
	goat._setAccount(ACCOUNT_NAPOLEON)
}

test().then(() => { process.exit() })
