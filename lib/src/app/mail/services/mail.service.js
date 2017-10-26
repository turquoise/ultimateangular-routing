import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var MailService = (function () {
    function MailService(http) {
        this.http = http;
    }
    MailService.prototype.getFolder = function (folder) {
        return this.http
            .get("/api/messages?folder=" + folder)
            .map(function (response) { return response.json(); });
    };
    MailService.prototype.getMessage = function (id) {
        return this.http
            .get("/api/messages/" + id)
            .map(function (response) { return response.json(); });
    };
    return MailService;
}());
MailService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [Http])
], MailService);
export { MailService };
//# sourceMappingURL=mail.service.js.map