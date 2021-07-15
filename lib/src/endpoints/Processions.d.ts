import { GoatResource } from '../GoatResource';
import { GoodwillResult, LuckStatus, ProcessionResult, ProcessionsStatus } from '../../types/goat/Processions';
import { Processions as ProcessionsEndpoint } from '../../types/Endpoints/Processions';
export declare class Processions extends GoatResource implements ProcessionsEndpoint {
    getAvailableProcessions(): Promise<ProcessionsStatus>;
    startProcession(): Promise<ProcessionResult>;
    useGoodwillDraught(num?: number): Promise<GoodwillResult>;
    setAutoDonation(value: number, grain: boolean, gold: boolean): Promise<LuckStatus>;
}
