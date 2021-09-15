import { GoatResource } from '../GoatResource';
export declare class Card extends GoatResource {
    weekly(): Promise<void>;
    monthly(): Promise<void>;
    season(): Promise<void>;
}
