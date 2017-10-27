import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/pluck';
var MailViewComponent = (function () {
    function MailViewComponent(route) {
        this.route = route;
        this.reply = '';
        this.hasUnsavedChanges = false;
        this.message = this.route.data.pluck('message');
    }
    MailViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function () {
            _this.reply = '';
            _this.hasUnsavedChanges = false;
        });
    };
    MailViewComponent.prototype.updateReply = function (value) {
        this.reply = value;
        this.hasUnsavedChanges = true;
    };
    MailViewComponent.prototype.sendReply = function () {
        console.log('Sent! ', this.reply);
        this.hasUnsavedChanges = false;
    };
    return MailViewComponent;
}());
MailViewComponent = tslib_1.__decorate([
    Component({
        selector: 'mail-view',
        styleUrls: ['mail-view.component.scss'],
        template: "\n    <div class=\"mail-view\">\n      <h2>{{ ( message | async).from }}</h2>\n      <p>{{ ( message | async).full }}</p>\n    </div>\n    <div class=\"mail-reply\">\n      <textarea (change)=\"updateReply($event.target.value)\"\n                placeholder=\"Type your reply...\"\n                [value]=\"reply\">\n      </textarea>\n      <button type=\"button\" (click)=\"sendReply()\">\n        Send\n      </button>\n    </div>\n  "
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], MailViewComponent);
export { MailViewComponent };
//# sourceMappingURL=mail-view.component.js.map