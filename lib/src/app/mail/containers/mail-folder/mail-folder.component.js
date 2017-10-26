import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';
var MailFolderComponent = (function () {
    function MailFolderComponent(route) {
        this.route = route;
        this.messages = this.route.data.pluck('messages');
        this.title = this.route.params.pluck('name');
    }
    return MailFolderComponent;
}());
MailFolderComponent = tslib_1.__decorate([
    Component({
        selector: 'mail-folder',
        styleUrls: ['mail-folder.component.scss'],
        template: "\n    <h2>{{ title | async }}</h2>\n    <!--<p>{{ data | json }}</p>-->\n    <mail-item\n      *ngFor=\"let message of (messages | async)\"\n      [message]=\"message\">\n    </mail-item>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], MailFolderComponent);
export { MailFolderComponent };
//# sourceMappingURL=mail-folder.component.js.map