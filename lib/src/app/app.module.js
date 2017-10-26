import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { MailModule } from './mail/mail.module';
import { Store } from 'store';
import { AppComponent } from './app.component';
export var ROUTES = [
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
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
            DashboardModule,
            HttpModule,
            RouterModule.forRoot(ROUTES)
        ],
        declarations: [
            AppComponent
        ],
        providers: [
            Store
        ],
        bootstrap: [
            AppComponent
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map