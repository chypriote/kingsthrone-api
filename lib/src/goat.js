"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goat = exports.Goat = exports.LOGIN_ACCOUNT_RAYMUNDUS = exports.LOGIN_ACCOUNT_701 = exports.LOGIN_ACCOUNT_NAPOLEON = exports.LOGIN_ACCOUNT_GAUTIER = void 0;
const endpoints_1 = require("./endpoints");
exports.LOGIN_ACCOUNT_GAUTIER = { 'rsn': '2ylxannmqx', 'login': { 'loginAccount': { 'parm1': 'WIFI', 'platform': 'gaotukc', 'parm2': 'GooglePlay', 'parm6': '4c4fbcab-ab57-3f8c-8447-f675203edc15', 'parm3': 'ONEPLUS A5000', 'openid': '563125632849524101', 'openkey': '6b66102c0d0e963ee2f6ebe96a2344917c3faca4' } } };
exports.LOGIN_ACCOUNT_NAPOLEON = { 'rsn': '2axwqwhxyx', 'login': { 'loginAccount': { 'parm1': 'WIFI', 'platform': 'gaotukc', 'parm2': 'GooglePlay', 'parm6': '4c4fbcab-ab57-3f8c-8447-f675203edc15', 'parm3': 'ONEPLUS A5000', 'openid': '565939577188654916', 'openkey': 'b4d47e9c7beaf15e97f899c8cd4f2bbc4f31c3bc' } } };
exports.LOGIN_ACCOUNT_701 = { 'rsn': '2maymbhnxnb', 'login': { 'loginAccount': { 'parm1': 'WIFI', 'platform': 'gaotukc', 'parm2': 'GooglePlay', 'parm6': '82557521-a0b4-3441-a774-840066252311', 'parm3': 'ONEPLUS A5000', 'openid': '565939577188654916', 'openkey': 'deb43d3a1b48b2f80d01ae6829834e9a309019f8' } } };
exports.LOGIN_ACCOUNT_RAYMUNDUS = { 'rsn': '7xcxcypvslg', 'login': { 'loginAccount': { 'parm1': 'WIFI', 'platform': 'gaotukc', 'parm2': 'GooglePlay', 'parm6': '2630f405-13ed-3867-90e5-325059450d8e', 'parm3': 'ONEPLUS A5000', 'openid': '573218842929144928', 'openkey': '78c249945d8d450de2111c2eebaa653b697f40c1' } } };
const VERSION = 'V1.3.559';
const COOKIE = 'lyjxncc=c3ac4e77dff349b66c7aeed276e3eb6c';
const DEFAULT_HOST = 'ksrus.gtbackoverseas.com';
// const OLD_HOST = 'zsjefunbm.zwformat.com'
class Goat {
    constructor() {
        this.token = null;
        this.gid = null;
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
        };
        this.events = {
            darkCastle: new endpoints_1.DarkCastle(this),
            gardenStroll: new endpoints_1.GardenStroll(this),
            picnic: new endpoints_1.Picnic(this),
            treasureHunt: new endpoints_1.TreasureHunt(this),
            castle: new endpoints_1.Renovation(this),
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
}
exports.Goat = Goat;
exports.goat = new Goat();
