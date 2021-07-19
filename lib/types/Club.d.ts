import { Sex } from './GameInfos';
import { Item } from './Item';
interface ClubMember {
    id: string;
    name: string;
    post: number;
    sex: Sex;
    job: string;
    shili: number;
    level: number;
    gx: number;
    allGx: number;
    chenghao: number;
    headType: number;
    headId: number;
    vipStatus: number;
    vip: number;
    jianshe: number;
    loginTime: number;
    inTime: {
        next: number;
        label: string;
    };
}
export interface ClubInfo {
    id: string;
    name: string;
    level: number;
    exp: number;
    fund: number;
    qq: number;
    laoma: string;
    outmsg: string;
    notice: string;
    members: ClubMember[];
    isJoin: string;
    mzUID: number;
    icon: string;
    goldLimit: number;
    money: number;
    userShili: number;
    allShiLi: number;
    userLevel: number;
    password: number;
    clubLog: ClubLog[];
    bossinfo: AllianceBossInfo[];
}
interface ClubLog {
    type: number;
    name: string;
    fname: string;
    num1: number;
    num2: number;
    items: Item[];
    time: number;
}
export interface Club {
    memberInfo: {
        cid: string;
        allgx: number;
        leftgx: number;
        dcid: number;
        post: number;
        ltime: {
            next: number;
            label: string;
        };
    };
    clubInfo: ClubInfo;
    clubLog: ClubLog[];
    bossInfo: AllianceBossInfo[];
}
export interface AllianceBossInfo {
    count: number;
    hp: number;
    id: number;
    ltime: {
        next: number;
        label: string;
    };
    money: number;
    type: number;
}
export {};
