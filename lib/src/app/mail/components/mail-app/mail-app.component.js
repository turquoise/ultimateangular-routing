import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var MailAppComponent = (function () {
    function MailAppComponent() {
    }
    MailAppComponent.prototype.onActivate = function (event) {
        console.log('onActivate event ', event);
    };
    MailAppComponent.prototype.onDeactivate = function (event) {
        console.log('onDeactivate event ', event);
    };
    return MailAppComponent;
}());
MailAppComponent = tslib_1.__decorate([
    Component({
        selector: 'mail-app',
        styleUrls: ['mail-app.component.scss'],
        template: "\n    <div class=\"mail\">\n      <router-outlet (activate)=\"onActivate($event)\" (deactivate)=\"onDeactivate($event)\">\n      </router-outlet>\n    </div>\n    <div class=\"mail\">\n      <router-outlet name=\"pane\"></router-outlet>\n    </div>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [])
], MailAppComponent);
export { MailAppComponent };
//# sourceMappingURL=mail-app.component.js.map