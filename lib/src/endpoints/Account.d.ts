import { GoatResource } from '../GoatResource';
import { GameInfos } from '../../types/goat/GameInfos';
import { Account as AccountEndpoint } from '../../types/Endpoints/Account';
export declare class Account extends GoatResource implements AccountEndpoint {
    createAccount(server: string): Promise<void | GameInfos>;
    getGeneratedName(): Promise<string>;
    setName(name: string): Promise<string>;
}
