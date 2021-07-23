import { GoatResource } from '../../GoatResource';
import { AllianceSiegeBattle, BATTLE_STATUS } from '../../../types';
export declare class AllianceSiege extends GoatResource {
    eventInfos(): Promise<AllianceSiegeBattle>;
    attackWall(): Promise<BATTLE_STATUS>;
    attackGeneral(): Promise<BATTLE_STATUS>;
    attackMember(uid: string): Promise<void>;
    claimTaskReward(id: number): Promise<void>;
    buySiegeWeapon(count?: number): Promise<void>;
}
