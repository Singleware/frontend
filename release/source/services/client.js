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
const Path = require("@singleware/path");
/**
 * Front-end browser service class.
 */
let Client = class Client {
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings) {
        /**
         * Current opened path.
         */
        this.opened = '';
        /**
         * Service events.
         */
        this.events = {
            receive: new Observable.Subject(),
            send: new Observable.Subject(),
            error: new Observable.Subject()
        };
        this.settings = settings;
    }
    /**
     * Current opened path.
     */
    get path() {
        return this.opened;
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
     * Error response event.
     */
    get onError() {
        return this.events.error;
    }
    /**
     * Starts the service.
     */
    start() {
        this.open(this.settings.path || location.pathname);
    }
    /**
     * Stops the service.
     */
    stop() { }
    /**
     * Opens the specified path.
     * @param path Path to be opened.
     */
    open(path) {
        this.events.receive.notifyAll({
            path: (this.opened = Path.resolve(Path.dirname(this.path), path)),
            input: {},
            output: {},
            environment: {}
        });
    }
};
__decorate([
    Class.Private()
], Client.prototype, "opened", void 0);
__decorate([
    Class.Private()
], Client.prototype, "settings", void 0);
__decorate([
    Class.Private()
], Client.prototype, "events", void 0);
__decorate([
    Class.Public()
], Client.prototype, "path", null);
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
__decorate([
    Class.Public()
], Client.prototype, "open", null);
Client = __decorate([
    Class.Describe()
], Client);
exports.Client = Client;
