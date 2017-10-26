import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MailService } from '../../services/mail.service';
var MailViewResolve = (function () {
    function MailViewResolve(mailService) {
        this.mailService = mailService;
    }
    MailViewResolve.prototype.resolve = function (route) {
        return this.mailService.getMessage(route.params.id);
    };
    return MailViewResolve;
}());
MailViewResolve = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [MailService])
], MailViewResolve);
export { MailViewResolve };
//# sourceMappingURL=mail-view.resolve.js.map