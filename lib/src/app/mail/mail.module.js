import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../auth/auth.guard';
import { MailFolderResolve } from './containers/mail-folder/mail-folder.resolve';
import { MailViewResolve } from './components/mail-view/mail-view.resolve';
import { MailViewGuard } from './components/mail-view/mail-view.guard';
import { MailService } from './services/mail.service';
export var ROUTES = [
    {
        path: 'mail',
        component: MailAppComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'folder/:name',
                component: MailFolderComponent,
                resolve: {
                    messages: MailFolderResolve
                }
            },
            {
                path: 'message/:id',
                component: MailViewComponent,
                outlet: 'pane',
                canDeactivate: [MailViewGuard],
                resolve: {
                    message: MailViewResolve
                }
            }
        ]
    }
];
var MailModule = (function () {
    function MailModule() {
    }
    return MailModule;
}());
MailModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            AuthModule,
            RouterModule.forChild(ROUTES)
        ],
        declarations: [
            MailFolderComponent,
            MailAppComponent,
            MailItemComponent,
            MailViewComponent
        ],
        providers: [
            MailService,
            MailFolderResolve,
            MailViewResolve,
            MailViewGuard
        ],
        exports: [
            MailAppComponent
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MailModule);
export { MailModule };
//# sourceMappingURL=mail.module.js.map