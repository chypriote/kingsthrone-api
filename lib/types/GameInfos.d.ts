import { CastleInfos } from './Kingdom';
import { RegularTasks } from './RegularTasks';
import { Alliance } from './Alliance';
import { Hero } from './Hero';
import { Item } from './Item';
import { UserTourney } from './Tourney';
import { Mail } from './Mail';
import { WorldBoss } from './WorldBoss';
import { KingdomExpGlobal } from './Expeditions';
import { WeeklyRank } from './WeeklyRank';
import { Event } from './Events';
import { AllianceSiegeInfo } from './Challenges';
import { PackageShop } from './Packages';
import { PackShop } from './PackShop';
import { LevyStatus } from './ThroneRoom';
import { Wife } from './Maidens';
import { Son } from './Children';
export declare enum Sex {
    MALE = 2,
    FEMALE = 1
}
interface UserDetails {
    uid: number;
    name: string;
    job: string;
    sex: Sex;
    level: number;
    exp: number;
    vip: number;
    cashbuy: number;
    step: string;
    guide: string;
    cash: number;
    coin: number;
    food: number;
    army: number;
    bmap: number;
    smap: number;
    mkill: number;
    xuanyan: string;
    voice: number;
    music: number;
    regtime: string;
    frame: number;
    head: number;
    chatframe: number;
    mmap: number;
    chenghao: number;
    maxch: number;
    headType: number;
    headId: number;
}
interface UserGuide {
    gnew: number;
    smap: number;
    mmap: number;
    bmap: number;
    getWife: number;
}
export interface GameStats {
    e1: number;
    e2: number;
    e3: number;
    e4: number;
}
interface GameStatsList {
    hero: GameStats;
    wife: GameStats;
    son: GameStats;
}
interface OldGameStats {
    ep: number;
    nowEp: number;
    love: number;
    nowLove: number;
    flower: number;
    nowFlower: number;
}
export interface LoggedUser {
    pvb: {
        f: number;
        h: number;
        id: number;
    }[];
    headframe: {
        id: number;
    };
    user: UserDetails;
    guide: UserGuide;
    newEmo: [];
    ep: GameStats;
    ep_list: GameStatsList;
    old_ep: OldGameStats;
    chapRwdList: {
        bid: number;
        rwdStat: number;
    }[];
    dress: unknown;
    pvb2: {
        next: number;
        label: string;
    };
    efunUpData: {
        chongxing: number;
        xunfang: number;
        zhengwu: number;
        shangci: number;
    };
    selectOfficials: [];
    changjing: {
        ver: number;
        set: number;
        list: {
            id: number;
            cd: unknown;
            get: number;
        }[];
    };
    fuserStatus: {
        status: number;
    };
    vipStatus: {
        status: number;
    };
    banben: {
        vipver: number;
    };
}
export interface Ranking {
    shili: number;
    guanka: number;
    love: number;
    shiliKua: number;
    clubKua: number;
    heroKua: number;
    loveKua: number;
}
interface Task {
    id: number;
    num: number;
    max: number;
}
interface Hanlin {
    level: number;
    exp: number;
    ruid: string;
    ctime: number;
    tip: number;
}
interface SpecialOfferPack {
    dc: number;
    items: Item[];
    itemText: string;
    showHero: {
        id: number;
        type: number;
    };
}
interface PurchaseReward {
    info: {
        _act_id: number;
        eTime: number;
        id: number;
        pindex: number;
        showTime: number;
        sTime: number;
        title: string;
        type: number;
        ycdc: number;
    };
    msg: string;
    rwd: {
        id: number;
        items: Item[];
        need: number;
    };
}
export declare type GameInfos = {
    banish: {
        heroList: unknown[];
    };
    chat: {
        blacklist: unknown[];
    };
    chenghao: {
        chInfo: {
            setid: number;
            list: {
                checked: number;
                chid: number;
                endT: number;
                getT: number;
            }[];
        };
        wyrwd: {
            get: number;
        };
    };
    chengjiu: {
        cjlist: {
            id: number;
            num: number;
            rwd: number;
        }[];
    };
    club: Alliance;
    CombinedSevContinuous: {
        info: unknown;
        cfg: SpecialOfferPack[];
    } | undefined;
    czhuodong: {
        day: {
            cfg: PurchaseReward;
            cons: number;
            rwd: number;
        };
        leitian: {
            cfg: PurchaseReward;
            cons: number;
            rwd: number;
        };
        total: {
            cfg: PurchaseReward;
            cons: number;
            rwd: number;
        };
    };
    czlbhuodong: PackageShop;
    dadian: {
        counter: {
            id: number;
            name: string;
            num: number;
        }[];
    };
    daily: RegularTasks;
    derail: unknown;
    friends: {
        fapplyStatus: {
            status: number;
        };
    };
    fuli: unknown;
    hangUpSystem: {
        info: CastleInfos[];
    };
    hanlin: {
        info: Hanlin;
    };
    hero: {
        heroList: Hero[];
    };
    huanggong: {
        qingAn: {
            type: number;
        };
    };
    huodonglist: {
        all: Event[];
    };
    item: {
        itemList: Item[];
    };
    jingYing: LevyStatus;
    kingdomExpedition: KingdomExpGlobal;
    kuaCLubBattle: {
        data: {
            type: number;
        };
        info: AllianceSiegeInfo;
    } | undefined;
    laofang: {
        laofang: {
            hit: number;
            da: number;
            kaifang: number;
        };
        mingwang: {
            eday: number;
            mw: number;
            maxmw: number;
        };
    };
    loginMod: {
        countTimeLength: {
            status: number;
        };
    };
    mail: {
        mailList: Mail[];
    };
    order: unknown;
    ranking: {
        mobai: Ranking;
    };
    school: {
        base: {
            desk: number;
            fri_desk: number;
        };
        list: {
            id: number;
            hid: number;
            cd: {
                next: number;
                label: string;
            };
        }[];
    };
    sevenSign: {
        cfg: {
            level: {
                day: number;
                type: number;
            }[];
            rwd: {
                id: number;
                items: Item[];
            }[];
        };
        countdown: number;
    };
    shop: {
        giftlist: PackShop;
    };
    son: {
        sonList: Son[];
    };
    system: unknown;
    task: {
        tmain: Task;
    };
    user: LoggedUser;
    warHorse: unknown;
    weekly: RegularTasks;
    weeklyrank: {
        info: WeeklyRank;
    };
    wife: {
        wifeList: Wife[];
    };
    wordboss: WorldBoss;
    xingqin: {
        checknew: {
            isNewSj: number;
            newListQj: [];
            isNewSuc: number;
        };
    };
    xunfang: {
        xfInfo: {
            num: number;
            next: number;
            label: string;
        };
        recover: {
            num: number;
            auto2: number;
            auto3: number;
            ysSet: number;
        };
        zhenZai: {
            used: number;
            num: number;
        };
    };
    yamen: UserTourney;
};
export {};
