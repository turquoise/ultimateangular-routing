import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MailModule } from './mail/mail.module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthGuard } from './auth/auth.guard';
import { Store } from 'store';
import { AppComponent } from './app.component';
export var CustomPreload = (function () {
    function CustomPreload() {
    }
    CustomPreload.prototype.preload = function (route, fn) {
        return route.data && route.data.preload ? fn() : Observable.of(null);
    };
    return CustomPreload;
}());
export var ROUTES = [
    { path: 'dashboard', canLoad: [AuthGuard], data: { preload: true }, loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: '**', redirectTo: 'folder/inbox' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            MailModule,
            AuthModule,
            DashboardModule,
            HttpModule,
            RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload })
        ],
        declarations: [
            AppComponent
        ],
        providers: [
            Store,
            CustomPreload
        ],
        bootstrap: [
            AppComponent
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map