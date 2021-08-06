import { GoatResource } from '../../GoatResource';
import { MysteriousIslandStatus, MysteriousIslandFight } from '../../../types/Events/MysteriousIsland';
export declare class MysteriousIsland extends GoatResource {
    eventInfos(): Promise<MysteriousIslandStatus>;
    selectIsland(id: number): Promise<void>;
    selectHero(id: number): Promise<void>;
    fight(id: number): Promise<MysteriousIslandFight>;
    getLevelReward(id: number): Promise<void>;
}
