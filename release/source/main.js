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
const Application = require("@singleware/application");
const DOM = require("@singleware/jsx");
/**
 * Frontend main application class.
 */
let Main = class Main extends Application.Main {
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings) {
        super({
            separator: '/',
            variable: /^\{([a-z_0-9]+)\}$/
        });
        this.settings = settings;
    }
    /**
     * Filter event handler.
     * @param match Matched routes.
     * @param callback Handler callback.
     */
    async filterHandler(match, callback) {
        await super.filterHandler(match, callback);
        if (match.detail.granted) {
            let title;
            if (this.settings.title) {
                title = this.settings.title.text;
                if (match.variables.title) {
                    title = `${title}${this.settings.title.separator || ' '}${match.variables.title}`;
                }
            }
            else {
                title = match.variables.title;
            }
            history.pushState(match.variables.state, title, match.detail.path);
        }
    }
    /**
     * Process event handler.
     * @param match Matched routes.
     * @param callback Handler callback.
     */
    async processHandler(match, callback) {
        const output = match.detail.output;
        await super.processHandler(match, callback);
        if (match.length === 0 && match.detail.granted) {
            if (output.title) {
                document.title = output.title;
            }
            if (output.content) {
                DOM.append(this.settings.body || document.body, output.content);
            }
        }
    }
};
__decorate([
    Class.Private()
], Main.prototype, "settings", void 0);
__decorate([
    Class.Protected()
], Main.prototype, "filterHandler", null);
__decorate([
    Class.Protected()
], Main.prototype, "processHandler", null);
Main = __decorate([
    Class.Describe()
], Main);
exports.Main = Main;
