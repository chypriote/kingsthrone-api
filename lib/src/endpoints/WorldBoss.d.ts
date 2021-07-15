import { GoatResource } from '../GoatResource';
import { FIGHT_STATUS } from '../../types/goat/worldboss';
import { WorldBoss as WorldBossEndpoint } from '../../types/Endpoints/WorldBoss';
export declare class WorldBoss extends GoatResource implements WorldBossEndpoint {
    attackMinion(id: number): Promise<FIGHT_STATUS>;
    attackBoss(id: number): Promise<FIGHT_STATUS>;
    recoverHero(id: number): Promise<void>;
}
