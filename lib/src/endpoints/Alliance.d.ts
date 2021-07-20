import { GoatResource } from '../GoatResource';
import { AllianceBossInfo, AllianceInfo, XSBattleInfo, XSBattleStatus } from '../../types/Alliance';
import { FIGHT_STATUS } from '../../types/WorldBoss';
export declare class Alliance extends GoatResource {
    contributeAlliance(): Promise<boolean>;
    getAllianceBossInfo(): Promise<AllianceBossInfo[]>;
    fightAllianceBoss(boss: number, hero: number): Promise<FIGHT_STATUS>;
    getLadder(): Promise<AllianceInfo[]>;
    getXServerBattleInfos(): Promise<XSBattleInfo>;
    getXServerFight(): Promise<XSBattleStatus>;
    dispatchXServerHero(id: number): Promise<void>;
}
