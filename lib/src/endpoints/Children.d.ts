import { GoatResource } from '../GoatResource';
import { InLaw } from '../../types/goat/InLaw';
import { Children as ChildrenEndpoint } from '../../types/Endpoints/Children';
export declare class Children extends GoatResource implements ChildrenEndpoint {
    getSonsStatus(): Promise<any>;
    raiseAllSons(): Promise<boolean>;
    nameSon(id: number): Promise<void>;
    useEnergyDraught(son: number, num: number): Promise<void>;
    evaluateSon(son: number): Promise<void>;
    getInLaws(): Promise<InLaw[]>;
    visitInLaw(uid: string): Promise<void>;
    visitInLaws(): Promise<void>;
}
