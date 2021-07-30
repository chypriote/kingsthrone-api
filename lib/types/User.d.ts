export interface User {
    uid: string;
    name: string;
    job: number;
    sex: number;
    level: number;
    vip: number;
    chenghao: number;
    headframe: number;
    headType: number;
    headId: number;
    vipStatus: number;
    shili: number;
    clubid: string;
    clubname: string;
    frame: number;
    head: number;
    chatframe: number;
    rid: number;
    num: number;
}
export interface UserProfile extends User {
    id: string;
    name: string;
    level: number;
    sex: number;
    job: number;
    vip: number;
    exp: number;
    bmap: number;
    mmap: number;
    smap: number;
    ep: {
        e1: number;
        e2: number;
        e3: number;
        e4: number;
    };
    shili: number;
    love: number;
    clubid: string;
    clubname: string;
    chenghao: number;
    xuanyan: string;
    chlist: {
        id: number;
    }[];
    son_num: number;
    wife_num: number;
    hero_num: number;
    headType: number;
    headId: number;
    vipStatus: number;
    set?: number;
}
interface InLaw extends User {
    num: number;
    num2: number;
    num3: number;
    tip: number;
}
interface Friend extends User {
    num2: string;
    num3: number;
}
export interface FriendsStatus {
    flist: Friend[];
    fapplylist: any[];
    fsendlist: {
        list: any[];
        num: number;
    };
    pclist: any[];
    qjlist: InLaw[];
    sonshili: {
        num: number;
    };
}
export {};
