"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Observable = require("@singleware/observable");
/**
 * Front-end browser service class.
 */
let Server = class Server {
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings) {
        /**
         * Service events.
         */
        this.events = {
            receive: new Observable.Subject(),
            send: new Observable.Subject()
        };
        this.settings = settings;
    }
    /**
     * Receive request event.
     */
    get onReceive() {
        return this.events.receive;
    }
    /**
     * Send response event.
     */
    get onSend() {
        return this.events.send;
    }
    /**
     * Starts the service.
     */
    start() {
        this.events.receive.notifyAll({
            path: this.settings.path || location.pathname,
            input: {},
            output: {}
        });
    }
    /**
     * Stops the service.
     */
    stop() { }
};
__decorate([
    Class.Private()
], Server.prototype, "settings", void 0);
__decorate([
    Class.Private()
], Server.prototype, "events", void 0);
__decorate([
    Class.Public()
], Server.prototype, "onReceive", null);
__decorate([
    Class.Public()
], Server.prototype, "onSend", null);
__decorate([
    Class.Public()
], Server.prototype, "start", null);
__decorate([
    Class.Public()
], Server.prototype, "stop", null);
Server = __decorate([
    Class.Describe()
], Server);
exports.Server = Server;
