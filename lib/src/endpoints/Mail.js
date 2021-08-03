"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
const GoatResource_1 = require("../GoatResource");
class Mail extends GoatResource_1.GoatResource {
    async readAllMail() {
        await this.request({ mail: { redAllMails: [] } });
    }
    async deleteAllMail() {
        await this.request({ mail: { delMails: [] } });
    }
    async openMail(id) {
        await this.request({ mail: { openMails: { mid: id } } });
    }
}
exports.Mail = Mail;
