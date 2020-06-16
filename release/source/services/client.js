"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Observable = require("@singleware/observable");
const helper_1 = require("../helper");
const navigator_1 = require("./navigator");
/**
 * Front-end client class.
 */
let Client = class Client extends Class.Null {
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings) {
        super();
        /**
         * Receive subject instance.
         */
        this.receiveSubject = new Observable.Subject();
        /**
         * Send subject instance.
         */
        this.sendSubject = new Observable.Subject();
        /**
         * Error subject instance.
         */
        this.errorSubject = new Observable.Subject();
        this.settings = settings;
        this.navigation = new navigator_1.Navigator(this, settings.path || location.pathname, settings.search || helper_1.Helper.parseURLSearch(document.location.search.substr(1)));
    }
    /**
     * Gets the current opened path.
     */
    get path() {
        return this.navigation.path;
    }
    /**
     * Gets the navigator instance.
     */
    get navigator() {
        return this.navigation;
    }
    /**
     * Receive request event.
     */
    get onReceive() {
        return this.receiveSubject;
    }
    /**
     * Send response event.
     */
    get onSend() {
        return this.sendSubject;
    }
    /**
     * Error response event.
     */
    get onError() {
        return this.errorSubject;
    }
    /**
     * Starts the service.
     */
    start() {
        this.navigation.reload();
    }
    /**
     * Stops the service.
     */
    stop() { }
};
__decorate([
    Class.Private()
], Client.prototype, "settings", void 0);
__decorate([
    Class.Private()
], Client.prototype, "navigation", void 0);
__decorate([
    Class.Private()
], Client.prototype, "receiveSubject", void 0);
__decorate([
    Class.Private()
], Client.prototype, "sendSubject", void 0);
__decorate([
    Class.Private()
], Client.prototype, "errorSubject", void 0);
__decorate([
    Class.Public()
], Client.prototype, "path", null);
__decorate([
    Class.Public()
], Client.prototype, "navigator", null);
__decorate([
    Class.Public()
], Client.prototype, "onReceive", null);
__decorate([
    Class.Public()
], Client.prototype, "onSend", null);
__decorate([
    Class.Public()
], Client.prototype, "onError", null);
__decorate([
    Class.Public()
], Client.prototype, "start", null);
__decorate([
    Class.Public()
], Client.prototype, "stop", null);
Client = __decorate([
    Class.Describe()
], Client);
exports.Client = Client;
//# sourceMappingURL=client.js.map