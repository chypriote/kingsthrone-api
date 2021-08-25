import { Item } from '../Item';
import { GenericEventInfo } from './Event';
export interface AlliancePurchaseUser {
    rwd: {
        day: number;
        list: {
            id: number;
        }[];
    }[];
    inday: number;
    today: number;
    cz: any[];
    next: number;
}
export interface AlliancePurchaseStatus {
    clubczinfo: {
        day: number;
        num: number;
        uidinfo: {
            username: string;
            post: number;
            cons: number;
            cztime: number;
        }[];
        constotal: number;
    }[];
    info: GenericEventInfo & {
        no: number;
    };
    cfg: {
        day: number;
        list: {
            id: number;
            items: Item[];
            need: number;
        }[];
    }[];
    user: AlliancePurchaseUser;
}
