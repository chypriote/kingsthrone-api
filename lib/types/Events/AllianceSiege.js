"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BATTLE_STATUS = void 0;
var BATTLE_STATUS;
(function (BATTLE_STATUS) {
    BATTLE_STATUS[BATTLE_STATUS["AWAITING"] = 0] = "AWAITING";
    BATTLE_STATUS[BATTLE_STATUS["WALL"] = 2] = "WALL";
    BATTLE_STATUS[BATTLE_STATUS["GENERAL"] = 3] = "GENERAL";
    BATTLE_STATUS[BATTLE_STATUS["PLUNDER"] = 4] = "PLUNDER";
    BATTLE_STATUS[BATTLE_STATUS["FINISHED"] = 5] = "FINISHED";
})(BATTLE_STATUS = exports.BATTLE_STATUS || (exports.BATTLE_STATUS = {}));
