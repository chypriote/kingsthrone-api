import { GoatResource } from '../GoatResource';
import { GoodwillResult, LuckStatus, ProcessionResult, ProcessionsStatus } from '../../types/Processions';
export declare class Processions extends GoatResource {
    getAvailableProcessions(): Promise<ProcessionsStatus>;
    startProcession(): Promise<ProcessionResult>;
    useGoodwillDraught(num?: number): Promise<GoodwillResult>;
    setAutoDonation(value: number, grain: boolean, gold: boolean): Promise<LuckStatus>;
}
