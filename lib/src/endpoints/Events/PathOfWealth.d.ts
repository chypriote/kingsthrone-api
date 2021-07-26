import { GoatResource } from '../../GoatResource';
import { PathOfWealthStatus } from '../../../types';
export declare class PathOfWealth extends GoatResource {
    eventInfos(): Promise<PathOfWealthStatus>;
    rollDice(): Promise<void>;
    claimDice(id: number): Promise<void>;
    claimAllDices(): Promise<void>;
    openChest(id: number): Promise<void>;
}
