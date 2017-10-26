import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var MailItemComponent = (function () {
    function MailItemComponent(router) {
        this.router = router;
    }
    return MailItemComponent;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], MailItemComponent.prototype, "message", void 0);
MailItemComponent = tslib_1.__decorate([
    Component({
        selector: 'mail-item',
        styleUrls: ['mail-item.component.scss'],
        template: "\n    <a class=\"mail-item\"\n      [routerLink]=\"['', { outlets: { pane: ['message', message.id]}}]\"\n      routerLinkActive=\"active\">\n      <h3>\n        {{ message.from }}\n        <span>{{ message.timestamp | date:'shortTime' }}</span>\n      </h3>\n      <p>{{ message.summary }}</p>\n    </a>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], MailItemComponent);
export { MailItemComponent };
//# sourceMappingURL=mail-item.component.js.map