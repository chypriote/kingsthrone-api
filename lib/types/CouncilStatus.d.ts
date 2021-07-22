import { User } from './User';
export declare type CouncilStatus = {
    desk: {
        master: User & {
            buff: number;
        };
        desks: User & {
            buff: number;
        }[];
        log: {
            uid1: number;
            name1: string;
            type: number;
            time: number;
        }[];
    };
};
