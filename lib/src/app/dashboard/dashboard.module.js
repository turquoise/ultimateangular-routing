import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
export var ROUTES = [
    {
        path: '',
        component: DashboardComponent
    }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(ROUTES)
        ],
        declarations: [
            DashboardComponent
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map