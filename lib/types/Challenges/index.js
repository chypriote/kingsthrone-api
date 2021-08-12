"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHALLENGE_TYPES = void 0;
__exportStar(require("./AllianceSiege"), exports);
__exportStar(require("./AllianceChallenges"), exports);
__exportStar(require("./Challenges"), exports);
__exportStar(require("./XSChallenge"), exports);
var CHALLENGE_TYPES;
(function (CHALLENGE_TYPES) {
    CHALLENGE_TYPES[CHALLENGE_TYPES["ALLIANCE_INTIMACY"] = 312] = "ALLIANCE_INTIMACY";
    CHALLENGE_TYPES[CHALLENGE_TYPES["ALLIANCE_EXPERIENCE"] = 250] = "ALLIANCE_EXPERIENCE";
    CHALLENGE_TYPES[CHALLENGE_TYPES["GRAIN"] = 259] = "GRAIN";
    CHALLENGE_TYPES[CHALLENGE_TYPES["MAIDEN_EXPERIENCE"] = 1075] = "MAIDEN_EXPERIENCE";
    CHALLENGE_TYPES[CHALLENGE_TYPES["RAISE_CHILDREN"] = 311] = "RAISE_CHILDREN";
    CHALLENGE_TYPES[CHALLENGE_TYPES["INTIMACY"] = 253] = "INTIMACY";
    CHALLENGE_TYPES[CHALLENGE_TYPES["TOURNEY"] = 254] = "TOURNEY";
    CHALLENGE_TYPES[CHALLENGE_TYPES["CHARM"] = 258] = "CHARM";
    CHALLENGE_TYPES[CHALLENGE_TYPES["SPEND_GOLD"] = 255] = "SPEND_GOLD";
    CHALLENGE_TYPES[CHALLENGE_TYPES["QUALITY"] = 1078] = "QUALITY";
    CHALLENGE_TYPES[CHALLENGE_TYPES["RARE_BEASTS"] = 1098] = "RARE_BEASTS";
    CHALLENGE_TYPES[CHALLENGE_TYPES["EQUIPMENT"] = 1339] = "EQUIPMENT";
    CHALLENGE_TYPES[CHALLENGE_TYPES["XS_INTIMACY"] = 314] = "XS_INTIMACY";
})(CHALLENGE_TYPES = exports.CHALLENGE_TYPES || (exports.CHALLENGE_TYPES = {}));
