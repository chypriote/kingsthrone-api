"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUEST_STATUS = void 0;
var QUEST_STATUS;
(function (QUEST_STATUS) {
    QUEST_STATUS[QUEST_STATUS["ONGOING"] = 0] = "ONGOING";
    QUEST_STATUS[QUEST_STATUS["FINISHED"] = 1] = "FINISHED";
    QUEST_STATUS[QUEST_STATUS["CLAIMED"] = 2] = "CLAIMED";
})(QUEST_STATUS = exports.QUEST_STATUS || (exports.QUEST_STATUS = {}));
/**
 * Grid event
 * 	- Path of Wealth
 * 	- Dark Castle
 */
var GRID_ITEM;
(function (GRID_ITEM) {
    GRID_ITEM[GRID_ITEM["NORMAL"] = 0] = "NORMAL";
    GRID_ITEM[GRID_ITEM["BLUE_BAG"] = 1] = "BLUE_BAG";
    GRID_ITEM[GRID_ITEM["ORANGE_BAG"] = 2] = "ORANGE_BAG";
    GRID_ITEM[GRID_ITEM["PURPLE_BAG"] = 3] = "PURPLE_BAG";
})(GRID_ITEM || (GRID_ITEM = {}));
