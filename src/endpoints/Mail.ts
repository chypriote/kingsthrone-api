import { GoatResource } from '../GoatResource'

export class Mail extends GoatResource {
	async readAllMail(): Promise<void> {
		await this.request({ mail: { redAllMails: [] } })
	}

	async deleteAllMail(): Promise<void> {
		await this.request({ mail: { delMails: [] } })
	}

	async openMail(id: number): Promise<void> {
		await this.request({ mail: { openMails: { mid: id } } })
	}
}
