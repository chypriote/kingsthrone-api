import { GoatResource } from '../GoatResource';
import { FeastDetails, FeastInfo, FeastShop, FeastStatus, OngoingFeast } from '../../types/goat/Feasts';
import { Feasts as FeastsEndpoint } from '../../types/Endpoints/Feasts';
export declare class Feasts extends GoatResource implements FeastsEndpoint {
    getFeastsInfo(): Promise<FeastInfo>;
    getFeast(uid: string | null): Promise<FeastDetails>;
    openFeast(): Promise<void>;
    joinFeast(uid: string, seat: number): Promise<{
        jfly: FeastStatus;
        jlShop: FeastShop;
        yhInfo: OngoingFeast[];
    }>;
    buyFeastItem(id: number): Promise<void>;
}
