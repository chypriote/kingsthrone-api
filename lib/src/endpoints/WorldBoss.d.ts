import { GoatResource } from '../GoatResource';
import { FIGHT_STATUS } from '../../types';
export declare class WorldBoss extends GoatResource {
    attackMinion(id: number): Promise<FIGHT_STATUS>;
    attackBoss(id: number): Promise<FIGHT_STATUS>;
    recoverHero(id: number): Promise<void>;
    buyItem(id: number): Promise<void>;
}
