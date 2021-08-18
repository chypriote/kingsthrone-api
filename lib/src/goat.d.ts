import { Account, Alchemy, Alliance, AllianceSiege, BlessedChest, Campaign, Children, Coronation, DarkCastle, Divining, DragonSlaying, Expeditions, Feasts, GardenStroll, GiftingTree, GiftOfTheFae, HallOfFame, Heroes, HeroesTrial, Items, JewelsOfLuck, Kingdom, KingsPass, LimitedTimeQuests, MaidenPainting, Maidens, Mail, PathOfWealth, PeoplesMonarch, Picnic, Processions, Profile, Rankings, Renovation, RenownedMerchant, Rewards, Shop, ThroneRoom, Tourney, TreasureHunt, VenetianPass, WorldBoss, XServerTourney, ScratchAndWin, DIYStore, EquipmentTrial, MysteriousIsland, HuntersTavern, TreasureTable, FortunasBlessing, AlliancePurchase, SparksUnderMoonlight, ArchersAndAccolades, AllianceChampionship, Challenges, XSChallenges, Deathmatch } from './endpoints';
import { IAccount } from './GoatResource';
export { ACCOUNT_GAUTIER } from './accounts/gautier';
export { ACCOUNT_NAPOLEON } from './accounts/demophlos';
export { ACCOUNT_RAYMUNDUS } from './accounts/raymundus';
export declare class Goat {
    private readonly cookie;
    private token;
    private gid;
    private readonly host;
    private server;
    private version;
    private loginAccount;
    isLoggedIn: boolean;
    account: Account;
    alliance: Alliance;
    campaign: Campaign;
    children: Children;
    expeditions: Expeditions;
    feasts: Feasts;
    hallOfFame: HallOfFame;
    heroes: Heroes;
    items: Items;
    kingdom: Kingdom;
    limitedTimeQuests: LimitedTimeQuests;
    maidens: Maidens;
    mail: Mail;
    processions: Processions;
    profile: Profile;
    rankings: Rankings;
    rewards: Rewards;
    shop: Shop;
    throneRoom: ThroneRoom;
    tourney: Tourney;
    worldBoss: WorldBoss;
    challenges: Challenges;
    xsChallenges: XSChallenges;
    xServerTourney: XServerTourney;
    allianceChampionship: AllianceChampionship;
    deathmatch: Deathmatch;
    events: {
        alchemy: Alchemy;
        alliancePurchase: AlliancePurchase;
        allianceSiege: AllianceSiege;
        archersAndAccolads: ArchersAndAccolades;
        blessedChest: BlessedChest;
        castle: Renovation;
        coronation: Coronation;
        darkCastle: DarkCastle;
        divining: Divining;
        diyStore: DIYStore;
        dragonSlaying: DragonSlaying;
        equipmentTrial: EquipmentTrial;
        fortunasBlessing: FortunasBlessing;
        gardenStroll: GardenStroll;
        giftingTree: GiftingTree;
        giftOfTheFae: GiftOfTheFae;
        heroesTrial: HeroesTrial;
        huntersTavern: HuntersTavern;
        jewelsOfLuck: JewelsOfLuck;
        kingsPass: KingsPass;
        maidenPainting: MaidenPainting;
        mysteriousIsland: MysteriousIsland;
        pathOfWealth: PathOfWealth;
        peoplesMonarch: PeoplesMonarch;
        picnic: Picnic;
        renownedMerchant: RenownedMerchant;
        scratchAndWin: ScratchAndWin;
        sparksUnderMoonlight: SparksUnderMoonlight;
        treasureHunt: TreasureHunt;
        treasureTable: TreasureTable;
        venetianPass: VenetianPass;
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
    _isDemophlos(): boolean;
    _isShallan(): boolean;
    _getAccount(): IAccount;
    _setAccount(account: IAccount): this;
    _login({ token, uid }: {
        token: any;
        uid: any;
    }): void;
    _logout(): void;
}
export declare const goat: Goat;
