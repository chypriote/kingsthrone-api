"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
const GoatResource_1 = require("../GoatResource");
class Mail extends GoatResource_1.GoatResource {
    async readAllMail() {
        await this.request({ 'rsn': '6swkxspslyk', 'mail': { 'redAllMails': [] } });
    }
    async deleteAllMail() {
        await this.request({ 'rsn': '7xcpyxsxdsv', 'mail': { 'delMails': [] } });
    }
    async openMail(id) {
        await this.request({ 'rsn': '3zehpepsrew', 'mail': { 'openMails': { 'mid': id } } });
    }
}
exports.Mail = Mail;
