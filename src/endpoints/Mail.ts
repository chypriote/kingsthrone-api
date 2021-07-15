import { GoatResource } from '../GoatResource'

import { Mail as MailEndpoint } from '../../types/Endpoints/Mail'

export class Mail extends GoatResource implements MailEndpoint {
	async readAllMail(): Promise<void> {
		await this.request({ 'rsn': '6swkxspslyk', 'mail': { 'redAllMails': [] } })
	}

	async deleteAllMail(): Promise<void> {
		await this.request({ 'rsn': '7xcpyxsxdsv', 'mail': { 'delMails': [] } })
	}

	async openMail(id: number): Promise<void> {
		await this.request({ 'rsn': '3zehpepsrew', 'mail': { 'openMails': { 'mid': id } } })
	}
}
