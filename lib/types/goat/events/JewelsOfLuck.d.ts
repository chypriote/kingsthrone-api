import { Item } from '../Item';
export interface JewelsOfLuckStatus {
    info: {
        chosen: {
            id: number;
            key: number;
        }[];
        num: number;
    };
    cfg: {
        wall_gache: {
            id: number;
            prob_1000: number;
            default_item: Item | null;
        }[];
        chosen_pool: {
            key: number;
            item: Item;
        }[];
        cost: number;
        bili: number;
    };
}
