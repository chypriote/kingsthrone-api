import { GoatResource } from '../../GoatResource';
import { CHALLENGE_TYPES, XSIntimacyRankings, XSIntimacyStatus, XSKingdomPowerRankings, XSKingdomPowerStatus } from '../../../types';
export declare class XSChallenges extends GoatResource {
    intimacy(): Promise<XSIntimacyStatus>;
    getIntimacyRankings(): Promise<XSIntimacyRankings>;
    kingdomPower(): Promise<XSKingdomPowerStatus>;
    getKingdomPowerRankings(): Promise<XSKingdomPowerRankings>;
    claimProgressReward(challenge: CHALLENGE_TYPES, id: number): Promise<void>;
}
