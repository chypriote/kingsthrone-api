"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goat = exports.Goat = void 0;
const endpoints_1 = require("./endpoints");
const VERSION = process.env.VERSION || 'V1.3.571';
const COOKIE = 'lyjxncc=c3ac4e77dff349b66c7aeed276e3eb6c';
const DEFAULT_HOST = 'ksrus.gtbackoverseas.com';
// const OLD_HOST = 'zsjefunbm.zwformat.com'
class Goat {
    constructor(config = null) {
        this.isLoggedIn = false;
        this.account = new endpoints_1.Account(this);
        this.alliance = new endpoints_1.Alliance(this);
        this.campaign = new endpoints_1.Campaign(this);
        this.children = new endpoints_1.Children(this);
        this.expeditions = new endpoints_1.Expeditions(this);
        this.feasts = new endpoints_1.Feasts(this);
        this.hallOfFame = new endpoints_1.HallOfFame(this);
        this.heroes = new endpoints_1.Heroes(this);
        this.items = new endpoints_1.Items(this);
        this.kingdom = new endpoints_1.Kingdom(this);
        this.limitedTimeQuests = new endpoints_1.LimitedTimeQuests(this);
        this.maidens = new endpoints_1.Maidens(this);
        this.mail = new endpoints_1.Mail(this);
        this.processions = new endpoints_1.Processions(this);
        this.profile = new endpoints_1.Profile(this);
        this.rankings = new endpoints_1.Rankings(this);
        this.rewards = new endpoints_1.Rewards(this);
        this.shop = new endpoints_1.Shop(this);
        this.throneRoom = new endpoints_1.ThroneRoom(this);
        this.tourney = new endpoints_1.Tourney(this);
        this.worldBoss = new endpoints_1.WorldBoss(this);
        this.challenges = {
            xServerTourney: new endpoints_1.XServerTourney(this),
            deathmatch: new endpoints_1.Deathmatch(this),
            allianceSiege: new endpoints_1.AllianceSiege(this),
            allianceIntimacy: new endpoints_1.AllianceIntimacy(this),
            allianceExperience: new endpoints_1.AllianceExperience(this),
            grain: new endpoints_1.Grain(this),
            quality: new endpoints_1.Quality(this),
            maidenExp: new endpoints_1.MaidenExp(this),
            raiseChildren: new endpoints_1.RaiseChildren(this),
        };
        this.events = {
            alchemy: new endpoints_1.Alchemy(this),
            blessedChest: new endpoints_1.BlessedChest(this),
            castle: new endpoints_1.Renovation(this),
            coronation: new endpoints_1.Coronation(this),
            darkCastle: new endpoints_1.DarkCastle(this),
            divining: new endpoints_1.Divining(this),
            dragonSlaying: new endpoints_1.DragonSlaying(this),
            gardenStroll: new endpoints_1.GardenStroll(this),
            giftOfTheFae: new endpoints_1.GiftOfTheFae(this),
            giftingTree: new endpoints_1.GiftingTree(this),
            heroesTrial: new endpoints_1.HeroesTrial(this),
            jewelsOfLuck: new endpoints_1.JewelsOfLuck(this),
            kingsPass: new endpoints_1.KingsPass(this),
            maidenPainting: new endpoints_1.MaidenPainting(this),
            pathOfWealth: new endpoints_1.PathOfWealth(this),
            peoplesMonarch: new endpoints_1.PeoplesMonarch(this),
            picnic: new endpoints_1.Picnic(this),
            renownedMerchant: new endpoints_1.RenownedMerchant(this),
            treasureHunt: new endpoints_1.TreasureHunt(this),
            venetianPass: new endpoints_1.VenetianPass(this),
        };
        this._version = VERSION;
        this._cookie = COOKIE;
        this._host = DEFAULT_HOST;
        this._config = config;
    }
    get host() {
        return this._host;
    }
    get cookie() {
        return this._cookie;
    }
    get version() {
        return this._version;
    }
    set version(version) {
        this._version = version;
    }
    get baseUrl() {
        return `http://${this.host}/servers/s${this.server}.php`;
    }
    get server() {
        return this._config._server;
    }
    set server(server) {
        this._config._server = server;
    }
    get gid() {
        return this._config._gid;
    }
    get token() {
        return this._config._token;
    }
    get config() {
        return this._config;
    }
    //Sets a config, if a token exists, we are logged
    set config(config) {
        this._config = config;
        this.isLoggedIn = !!config._token;
    }
    //Creates a new config and sets a token
    set login({ token, uid }) {
        this._config._token = token;
        this._config._gid = uid;
        this.isLoggedIn = true;
        console.warn(`Logged in on ${this.server} as ${this.gid}`);
    }
    _isGautier() {
        return this.gid === '699002934';
    }
    _logout() {
        this.config._token = null;
        this.isLoggedIn = false;
    }
}
exports.Goat = Goat;
exports.goat = new Goat();
