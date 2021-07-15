import { GoatResource } from '../GoatResource';
export interface Mail extends GoatResource {
    readAllMail(): Promise<void>;
    deleteAllMail(): Promise<void>;
    openMail(id: number): Promise<void>;
}
