import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MailService } from '../../services/mail.service';
var MailFolderResolve = (function () {
    function MailFolderResolve(mailService) {
        this.mailService = mailService;
    }
    MailFolderResolve.prototype.resolve = function (route, state) {
        return this.mailService.getFolder(route.params.name);
    };
    return MailFolderResolve;
}());
MailFolderResolve = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [MailService])
], MailFolderResolve);
export { MailFolderResolve };
//# sourceMappingURL=mail-folder.resolve.js.map