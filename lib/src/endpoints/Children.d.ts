import { GoatResource } from '../GoatResource';
import { InLaw, Proposal } from '../../types';
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
    getProposals(): Promise<Proposal[]>;
    acceptProposal(son: number, partner: number, uid: string, type?: number): Promise<void>;
    matchMaker(son: number): Promise<Proposal[]>;
    marry(son: number, partner: number, uid: string, type?: number): Promise<void>;
    propose(son: number, type?: number): Promise<void>;
}
