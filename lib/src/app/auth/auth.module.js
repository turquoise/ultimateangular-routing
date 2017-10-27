import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = tslib_1.__decorate([
    NgModule({
        providers: [
            AuthService,
            AuthGuard
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map