import { GoatResource } from '../../GoatResource';
import { AllianceExperienceStatus, AllianceIntimacyStatus, AlliancePowerStatus, AllianceTourneyStatus, CHALLENGE_TYPES, CharmStatus, EquipmentStatus, FeastPointsStatus, GrainStatus, IntimacyStatus, KingdomPowerStatus, LoseSoldiersStatus, MaidenExpStatus, QualityStatus, RaiseChildrenStatus, RareBeastsStatus, SpendGoldStatus, TourneyStatus } from '../../../types';
export declare class Challenges extends GoatResource {
    allianceExperience(): Promise<AllianceExperienceStatus>;
    feastPoints(): Promise<FeastPointsStatus>;
    equipment(): Promise<EquipmentStatus>;
    allianceIntimacy(): Promise<AllianceIntimacyStatus>;
    alliancePower(): Promise<AlliancePowerStatus>;
    allianceTourney(): Promise<AllianceTourneyStatus>;
    charm(): Promise<CharmStatus>;
    grain(): Promise<GrainStatus>;
    intimacy(): Promise<IntimacyStatus>;
    kingdomPower(): Promise<KingdomPowerStatus>;
    loseSoldiers(): Promise<LoseSoldiersStatus>;
    maidenExperience(): Promise<MaidenExpStatus>;
    quality(): Promise<QualityStatus>;
    raiseChildren(): Promise<RaiseChildrenStatus>;
    rareBeasts(): Promise<RareBeastsStatus>;
    spendGold(): Promise<SpendGoldStatus>;
    tourney(): Promise<TourneyStatus>;
    claimProgressReward(challenge: CHALLENGE_TYPES, id: number): Promise<void>;
}
