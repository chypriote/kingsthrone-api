"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TASK_STATUS = exports.CHERISHED_WISH_TYPE = void 0;
/** Cherished Tree */
var CHERISHED_WISH_TYPE;
(function (CHERISHED_WISH_TYPE) {
    CHERISHED_WISH_TYPE[CHERISHED_WISH_TYPE["SIGN_IN"] = 0] = "SIGN_IN";
    CHERISHED_WISH_TYPE[CHERISHED_WISH_TYPE["GEMS"] = 1] = "GEMS";
    CHERISHED_WISH_TYPE[CHERISHED_WISH_TYPE["VIP"] = 2] = "VIP";
})(CHERISHED_WISH_TYPE = exports.CHERISHED_WISH_TYPE || (exports.CHERISHED_WISH_TYPE = {}));
/** Login Rewards */
var TASK_STATUS;
(function (TASK_STATUS) {
    TASK_STATUS[TASK_STATUS["RECEIVED"] = 3] = "RECEIVED";
    TASK_STATUS[TASK_STATUS["CLAIMABLE"] = 2] = "CLAIMABLE";
    TASK_STATUS[TASK_STATUS["ONGOING"] = 1] = "ONGOING";
    TASK_STATUS[TASK_STATUS["RECEIVED2"] = 10] = "RECEIVED2";
})(TASK_STATUS = exports.TASK_STATUS || (exports.TASK_STATUS = {}));
