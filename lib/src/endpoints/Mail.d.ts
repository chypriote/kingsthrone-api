import { GoatResource } from '../GoatResource';
export declare class Mail extends GoatResource {
    readAllMail(): Promise<void>;
    deleteAllMail(): Promise<void>;
    openMail(id: number): Promise<void>;
}
