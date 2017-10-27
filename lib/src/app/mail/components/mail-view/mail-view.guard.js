import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var MailViewGuard = (function () {
    function MailViewGuard() {
    }
    MailViewGuard.prototype.canDeactivate = function (component) {
        console.log('component ', component);
        return true;
    };
    return MailViewGuard;
}());
MailViewGuard = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], MailViewGuard);
export { MailViewGuard };
//# sourceMappingURL=mail-view.guard.js.map