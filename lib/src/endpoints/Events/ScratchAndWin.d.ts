import { GoatResource } from '../../GoatResource';
import { PRIZE_TYPE, ScratchAndWinStatus } from '../../../types/Events/ScratchAndWin';
import { ContinualTopUpStatus } from '../../../types';
export declare class ScratchAndWin extends GoatResource {
    eventInfos(): Promise<ScratchAndWinStatus>;
    buyScratchTicket(count?: number): Promise<void>;
    scratch(count?: number): Promise<void>;
    exchangeItem(id: number, type: PRIZE_TYPE, count?: number): Promise<void>;
    /** Top Up */
    continualTopUpInfos(): Promise<ContinualTopUpStatus>;
    getContinualTopUp(): Promise<void>;
}
