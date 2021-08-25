import { GoatResource } from '../../GoatResource';
import { ContinualTopUpStatus, SparksUnderMoonlightStatus } from '../../../types';
import { QUEST_TYPE, SPARKS_ITEM_TYPE } from '../../../types/Events/SparksUnderMoonlight';
export declare class SparksUnderMoonlight extends GoatResource {
    eventInfos(): Promise<SparksUnderMoonlightStatus>;
    claimQuestReward(type: QUEST_TYPE, id: number): Promise<void>;
    donateItem(type: SPARKS_ITEM_TYPE, count: number): Promise<void>;
    /** Top Up */
    continualTopUpInfos(): Promise<ContinualTopUpStatus>;
    getContinualTopUp(): Promise<void>;
}
