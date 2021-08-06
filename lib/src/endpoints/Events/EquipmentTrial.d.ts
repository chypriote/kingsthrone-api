import { GoatResource } from '../../GoatResource';
import { EquipmentMatchingPower, EquipmentMatchingRank, EquipmentTrialStatus, EquipmentTrialWheel } from '../../../types/Events/EquipmentTrial';
import { ContinualTopUpStatus, EventLimitedOffers } from '../../../types';
export declare class EquipmentTrial extends GoatResource {
    eventInfos(): Promise<EquipmentTrialStatus>;
    claimQuest(type: number, daily?: number): Promise<void>;
    /** Equipment Wheel */
    equipmentWheelInfo(): Promise<EquipmentTrialWheel>;
    selectReward(key: number, id: number): Promise<void>;
    buyWarriorToken(count?: number): Promise<void>;
    spinWheel(count: number): Promise<void>;
    equipmentTrialRank(): Promise<EquipmentMatchingRank[]>;
    equipmentPowerRanking(): Promise<EquipmentMatchingPower>;
    /** Top Up */
    continualTopUpInfos(): Promise<ContinualTopUpStatus>;
    getContinualTopUp(): Promise<void>;
    /** Limited Offer */
    limitedOfferInfo(): Promise<EventLimitedOffers>;
    buyLimitedOffer(id: number): Promise<void>;
}
