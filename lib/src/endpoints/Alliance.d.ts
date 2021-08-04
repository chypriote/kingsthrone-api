import { GoatResource } from '../GoatResource';
import { AllianceBossInfo, AllianceInfo, XSBattleInfo, XSBattleStatus, Alliance as AllianceFull, XSRewardInfos } from '../../types';
import { FIGHT_STATUS } from '../../types/WorldBoss';
interface UsedHero {
    id: number;
    h: number;
    f: number;
}
export declare class Alliance extends GoatResource {
    getAllianceInfos(): Promise<AllianceFull>;
    contributeAlliance(): Promise<boolean>;
    getAllianceBossInfo(): Promise<{
        bosses: AllianceBossInfo[];
        heroes: UsedHero[];
    }>;
    fightAllianceBoss(boss: number, hero: number): Promise<FIGHT_STATUS>;
    getLadder(): Promise<AllianceInfo[]>;
    buyAllianceShopItem(id: number): Promise<void>;
    getXServerBattleInfos(): Promise<XSBattleInfo>;
    getXServerFight(): Promise<XSBattleStatus>;
    dispatchXServerHero(id: number): Promise<void>;
    getXServerRewardInfos(): Promise<XSRewardInfos>;
    claimXServerReward(): Promise<void>;
}
export {};
