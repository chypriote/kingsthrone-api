import { GoatResource } from '../GoatResource';
import { Rankings as RankingsEndpoint } from '../../types/Endpoints/Rankings';
export declare class Rankings extends GoatResource implements RankingsEndpoint {
    payHomageKP(): Promise<void>;
    payHomageCampaign(): Promise<void>;
    payHomageIntimacy(): Promise<void>;
}
