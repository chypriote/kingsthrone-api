"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goat = exports.Goat = exports.ACCOUNT_RAYMUNDUS = exports.ACCOUNT_NAPOLEON = exports.ACCOUNT_GAUTIER = void 0;
const endpoints_1 = require("./endpoints");
const demophlos_1 = require("./accounts/demophlos");
const VERSION = 'V1.3.564';
const COOKIE = 'lyjxncc=c3ac4e77dff349b66c7aeed276e3eb6c';
const DEFAULT_HOST = 'ksrus.gtbackoverseas.com';
// const OLD_HOST = 'zsjefunbm.zwformat.com'
var gautier_1 = require("./accounts/gautier");
Object.defineProperty(exports, "ACCOUNT_GAUTIER", { enumerable: true, get: function () { return gautier_1.ACCOUNT_GAUTIER; } });
var demophlos_2 = require("./accounts/demophlos");
Object.defineProperty(exports, "ACCOUNT_NAPOLEON", { enumerable: true, get: function () { return demophlos_2.ACCOUNT_NAPOLEON; } });
var raymundus_1 = require("./accounts/raymundus");
Object.defineProperty(exports, "ACCOUNT_RAYMUNDUS", { enumerable: true, get: function () { return raymundus_1.ACCOUNT_RAYMUNDUS; } });
class Goat {
    constructor() {
        this.token = null;
        this.gid = null;
        this.loginAccount = demophlos_1.ACCOUNT_NAPOLEON;
        this.isLoggedIn = false;
        this.version = VERSION;
        this.cookie = COOKIE;
        this.host = DEFAULT_HOST;
        this.server = '699';
        this.token = null;
        this.gid = null;
        this.account = new endpoints_1.Account(this);
        this.alliance = new endpoints_1.Alliance(this);
        this.children = new endpoints_1.Children(this);
        this.expeditions = new endpoints_1.Expeditions(this);
        this.feasts = new endpoints_1.Feasts(this);
        this.hallOfFame = new endpoints_1.HallOfFame(this);
        this.items = new endpoints_1.Items(this);
        this.kingdom = new endpoints_1.Kingdom(this);
        this.maidens = new endpoints_1.Maidens(this);
        this.mail = new endpoints_1.Mail(this);
        this.processions = new endpoints_1.Processions(this);
        this.profile = new endpoints_1.Profile(this);
        this.rankings = new endpoints_1.Rankings(this);
        this.rewards = new endpoints_1.Rewards(this);
        this.tourney = new endpoints_1.Tourney(this);
        this.worldBoss = new endpoints_1.WorldBoss(this);
        this.challenges = {
            xServerTourney: new endpoints_1.XServerTourney(this),
            deathmatch: new endpoints_1.Deathmatch(this),
            allianceSiege: new endpoints_1.AllianceSiege(this),
        };
        this.events = {
            darkCastle: new endpoints_1.DarkCastle(this),
            gardenStroll: new endpoints_1.GardenStroll(this),
            picnic: new endpoints_1.Picnic(this),
            treasureHunt: new endpoints_1.TreasureHunt(this),
            castle: new endpoints_1.Renovation(this),
            dragonSlaying: new endpoints_1.DragonSlaying(this),
            jewelsOfLuck: new endpoints_1.JewelsOfLuck(this),
            maidenPainting: new endpoints_1.MaidenPainting(this),
        };
    }
    _getHost() { return this.host; }
    _getCookie() { return this.cookie; }
    _getServer() { return this.server; }
    _setServer(server) {
        this.server = server;
        return this;
    }
    _getVersion() { return this.version; }
    _setVersion(version) {
        this.version = version;
        return this;
    }
    _getGid() { return this.gid; }
    _setGid(gid) {
        this.gid = gid === '691005139' ? '691005130' : gid;
        return this;
    }
    _getToken() { return this.token; }
    _setToken(token) {
        this.token = token;
        this.isLoggedIn = true;
        return this;
    }
    _getBaseUrl() {
        return `http://${this.host}/servers/s${this.server}.php`;
    }
    _isGautier() {
        return this.gid === '699002934';
    }
    _getAccount() { return this.loginAccount; }
    _setAccount(account) {
        this.loginAccount = account;
        return this;
    }
    _login({ token, uid }) {
        this.token = token;
        this.gid = uid;
        this.isLoggedIn = true;
        console.warn(`Logged in on ${this.server} as ${this.gid}`);
    }
    _logout() {
        this.token = null;
        this.gid = null;
        this.isLoggedIn = false;
    }
}
exports.Goat = Goat;
exports.goat = new Goat();
