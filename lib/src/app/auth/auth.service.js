import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
var AuthService = (function () {
    function AuthService() {
        this.user = { isAdmin: true };
    }
    AuthService.prototype.checkPermissions = function () {
        return Observable.of(this.user.isAdmin);
    };
    AuthService.prototype.isLoggedIn = function () {
        return Observable.of(true);
    };
    return AuthService;
}());
AuthService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map