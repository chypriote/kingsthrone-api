import { GoatResource } from '../GoatResource';
import { AllianceInfo, User } from '../../types';
interface LocalLadder {
    shili: User[];
    love: User[];
    guanka: User[];
}
export declare class Rankings extends GoatResource {
    localLadder: LocalLadder | null;
    payHomageKP(): Promise<void>;
    payHomageCampaign(): Promise<void>;
    payHomageIntimacy(): Promise<void>;
    getLadders(force?: boolean): Promise<LocalLadder>;
    getLadderKP(force?: boolean): Promise<User[]>;
    getLadderCampaign(force?: boolean): Promise<User[]>;
    getLadderIntimacy(force?: boolean): Promise<User[]>;
    payHomageXSKP(): Promise<void>;
    payHomageXSAlliance(): Promise<void>;
    payHomageXSIntimacy(): Promise<void>;
    getLadderXSKP(): Promise<User[]>;
    getLadderXSAlliance(): Promise<(AllianceInfo & {
        rid: number;
    })[]>;
    getLadderXSIntimacy(): Promise<User[]>;
}
export {};
