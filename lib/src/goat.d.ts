import { IGoat } from '../types/IGoat';
import { Account, Alliance, Children, Expeditions, Feasts, HallOfFame, Items, Kingdom, Maidens, Mail, Processions, Profile, Rankings, Rewards, Tourney, WorldBoss, XServerTourney, Deathmatch, DarkCastle, GardenStroll, Picnic, TreasureHunt, Renovation } from './endpoints';
export declare const LOGIN_ACCOUNT_GAUTIER: {
    rsn: string;
    login: {
        loginAccount: {
            parm1: string;
            platform: string;
            parm2: string;
            parm6: string;
            parm3: string;
            openid: string;
            openkey: string;
        };
    };
};
export declare const LOGIN_ACCOUNT_NAPOLEON: {
    rsn: string;
    login: {
        loginAccount: {
            parm1: string;
            platform: string;
            parm2: string;
            parm6: string;
            parm3: string;
            openid: string;
            openkey: string;
        };
    };
};
export declare const LOGIN_ACCOUNT_701: {
    rsn: string;
    login: {
        loginAccount: {
            parm1: string;
            platform: string;
            parm2: string;
            parm6: string;
            parm3: string;
            openid: string;
            openkey: string;
        };
    };
};
export declare const LOGIN_ACCOUNT_RAYMUNDUS: {
    rsn: string;
    login: {
        loginAccount: {
            parm1: string;
            platform: string;
            parm2: string;
            parm6: string;
            parm3: string;
            openid: string;
            openkey: string;
        };
    };
};
export declare class Goat implements IGoat {
    private readonly cookie;
    private token;
    private gid;
    private readonly host;
    private server;
    private version;
    isLoggedIn: boolean;
    account: Account;
    alliance: Alliance;
    children: Children;
    expeditions: Expeditions;
    feasts: Feasts;
    hallOfFame: HallOfFame;
    items: Items;
    kingdom: Kingdom;
    maidens: Maidens;
    mail: Mail;
    processions: Processions;
    profile: Profile;
    rankings: Rankings;
    rewards: Rewards;
    tourney: Tourney;
    worldBoss: WorldBoss;
    challenges: {
        xServerTourney: XServerTourney;
        deathmatch: Deathmatch;
    };
    events: {
        darkCastle: DarkCastle;
        gardenStroll: GardenStroll;
        picnic: Picnic;
        treasureHunt: TreasureHunt;
        castle: Renovation;
    };
    constructor();
    _getHost(): string;
    _getCookie(): string;
    _getServer(): string;
    _setServer(server: string): this;
    _getVersion(): string;
    _setVersion(version: string): this;
    _getGid(): string | null;
    _setGid(gid: string): this;
    _getToken(): string | null;
    _setToken(token: string): this;
    _getBaseUrl(): string;
    _isGautier(): boolean;
}
export declare const goat: Goat;
