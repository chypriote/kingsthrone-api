import { GoatResource } from '../GoatResource';
import { FriendsStatus, GameInfos } from '../../types';
export declare class Account extends GoatResource {
    createAccount(server: string): Promise<void | GameInfos>;
    getGeneratedName(): Promise<string>;
    setName(name: string): Promise<string>;
    doMainQuestTask(id: number): Promise<void>;
    getThrone(): Promise<void>;
    doCampaignGuide(smap: number, bmap: number, mmap: number): Promise<void>;
    doGuide(id: number): Promise<void>;
    getFriendList(): Promise<FriendsStatus>;
}
