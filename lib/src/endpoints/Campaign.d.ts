import { GoatResource } from '../GoatResource';
export declare class Campaign extends GoatResource {
    oneKeyPve(): Promise<void>;
    fightCampaignBoss(id: number): Promise<void>;
    claimCastleCampaign(id: number): Promise<void>;
}
