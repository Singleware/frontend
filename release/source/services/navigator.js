"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Path = require("@singleware/path");
/**
 * Front-end navigator class.
 */
let Navigator = class Navigator extends Class.Null {
    /**
     * Default constructor.
     * @param client Client instance.
     * @param path Initial path.
     */
    constructor(client, path) {
        super();
        globalThis.addEventListener('popstate', this.popStateHandler.bind(this));
        this.client = client;
        this.current = path;
    }
    /**
     * Renders the specified path according to the given state.
     * @param path Path to be rendered.
     * @param state Determines whether the renderer will preserves the current state.
     */
    renderPath(path, state) {
        this.client.onReceive.notifyAll({
            path: path,
            input: {},
            output: {},
            environment: {
                local: {
                    state: state
                },
                shared: {}
            },
            granted: true
        });
    }
    /**
     * Pop State, event handler.
     */
    popStateHandler() {
        this.current = document.location.pathname;
        this.renderPath(document.location.pathname, false);
    }
    /**
     * Gets the current path.
     */
    get path() {
        return this.current;
    }
    /**
     * Opens the specified path.
     * @param path Path to be opened.
     */
    open(path) {
        this.current = Path.resolve(Path.dirname(this.current), path);
        this.renderPath(this.current, true);
    }
    /**
     * Reopens the current path.
     */
    reload() {
        this.renderPath(this.current, false);
    }
};
__decorate([
    Class.Private()
], Navigator.prototype, "client", void 0);
__decorate([
    Class.Private()
], Navigator.prototype, "current", void 0);
__decorate([
    Class.Private()
], Navigator.prototype, "renderPath", null);
__decorate([
    Class.Private()
], Navigator.prototype, "popStateHandler", null);
__decorate([
    Class.Public()
], Navigator.prototype, "path", null);
__decorate([
    Class.Public()
], Navigator.prototype, "open", null);
__decorate([
    Class.Public()
], Navigator.prototype, "reload", null);
Navigator = __decorate([
    Class.Describe()
], Navigator);
exports.Navigator = Navigator;
//# sourceMappingURL=navigator.js.map