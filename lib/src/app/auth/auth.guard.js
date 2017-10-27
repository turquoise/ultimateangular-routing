import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canLoad = function () {
        return this.authService.checkPermissions();
    };
    AuthGuard.prototype.canActivate = function () {
        return this.authService.isLoggedIn();
    };
    AuthGuard.prototype.canActivateChild = function () {
        return true;
    };
    return AuthGuard;
}());
AuthGuard = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [AuthService])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map