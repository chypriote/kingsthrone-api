import { GoatResource } from '../GoatResource';
import { Mail as MailEndpoint } from '../../types/Endpoints/Mail';
export declare class Mail extends GoatResource implements MailEndpoint {
    readAllMail(): Promise<void>;
    deleteAllMail(): Promise<void>;
    openMail(id: number): Promise<void>;
}
