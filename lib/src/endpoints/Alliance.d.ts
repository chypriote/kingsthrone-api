import { GoatResource } from '../GoatResource';
import { AllianceBossInfo, AllianceInfo, XSBattleInfo, XSBattleStatus, Alliance as AllianceFull } from '../../types/Alliance';
import { FIGHT_STATUS } from '../../types/WorldBoss';
export declare class Alliance extends GoatResource {
    getAllianceInfos(): Promise<AllianceFull>;
    contributeAlliance(): Promise<boolean>;
    getAllianceBossInfo(): Promise<AllianceBossInfo[]>;
    fightAllianceBoss(boss: number, hero: number): Promise<FIGHT_STATUS>;
    getLadder(): Promise<AllianceInfo[]>;
    buyAllianceShopItem(id: number): Promise<void>;
    getXServerBattleInfos(): Promise<XSBattleInfo>;
    getXServerFight(): Promise<XSBattleStatus>;
    dispatchXServerHero(id: number): Promise<void>;
}
