import { GoatResource } from '../GoatResource';
import { GameInfos } from '../../types/goat/GameInfos';
export declare class Account extends GoatResource {
    createAccount(server: string): Promise<void | GameInfos>;
    getGeneratedName(): Promise<string>;
    setName(name: string): Promise<string>;
}
