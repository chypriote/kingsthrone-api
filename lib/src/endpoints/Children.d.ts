import { GoatResource } from '../GoatResource';
import { InLaw } from '../../types';
export declare class Children extends GoatResource {
    getSonsStatus(): Promise<any>;
    raiseAllSons(): Promise<boolean>;
    raiseSon(id: number): Promise<void>;
    nameSon(id: number): Promise<void>;
    useEnergyDraught(son: number, num: number): Promise<void>;
    evaluateSon(son: number): Promise<void>;
    getInLaws(): Promise<InLaw[]>;
    visitInLaw(uid: string): Promise<void>;
    visitInLaws(): Promise<void>;
}
