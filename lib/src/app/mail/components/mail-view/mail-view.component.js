import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';
var MailViewComponent = (function () {
    function MailViewComponent(route) {
        this.route = route;
        this.message = this.route.data.pluck('message');
    }
    return MailViewComponent;
}());
MailViewComponent = tslib_1.__decorate([
    Component({
        selector: 'mail-view',
        styleUrls: ['mail-view.component.scss'],
        template: "\n    <div class=\"mail-view\">\n      <h2>{{ ( message | async).from }}</h2>\n      <p>{{ ( message | async).full }}</p>\n    </div>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], MailViewComponent);
export { MailViewComponent };
//# sourceMappingURL=mail-view.component.js.map