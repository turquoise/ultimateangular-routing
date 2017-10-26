import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        styleUrls: ['app.component.scss'],
        template: "\n    <div class=\"app\">\n      <header>\n        <img src=\"/img/logo.svg\">\n      </header>\n      <div class=\"app__content\">\n        <nav>\n          <a\n            routerLink=\"folder/inbox\"\n            routerLinkActive=\"active\">\n            Inbox\n          </a>\n          <a\n            routerLink=\"folder/trash\"\n            routerLinkActive=\"active\">\n            Trash\n          </a>\n        </nav>\n        <mail-app></mail-app>\n      </div>\n    </div>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map