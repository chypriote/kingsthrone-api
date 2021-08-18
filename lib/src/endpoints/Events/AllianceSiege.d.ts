import { GoatResource } from '../../GoatResource';
import { AllianceSiegeBattle } from '../../../types';
import { BATTLE_STATUS } from '../../../types/Events/AllianceSiege';
export declare class AllianceSiege extends GoatResource {
    eventInfos(): Promise<AllianceSiegeBattle>;
    attackWall(count?: number): Promise<BATTLE_STATUS>;
    attackGeneral(count?: number): Promise<BATTLE_STATUS>;
    attackMember(uid: string, count?: number): Promise<void>;
    claimTaskReward(id: number): Promise<void>;
    buySiegeWeapon(count?: number): Promise<void>;
    buyDailyShop(id: number): Promise<void>;
    buyClassicShop(id: number): Promise<void>;
}
