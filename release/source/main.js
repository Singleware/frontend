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
     * Get formatted application title based on the application settings.
     * @param subtitle Subtitle of the current page.
     * @returns Returns the formatted title or undefined when there is no title to be set.
     */
    formatTitle(subtitle) {
        if (this.settings.title) {
            if (!subtitle) {
                return this.settings.title.text;
            }
            if (this.settings.title.prefix) {
                return `${this.settings.title.text}${this.settings.title.separator || ' '}${subtitle}`;
            }
            return `${subtitle}${this.settings.title.separator || ' '}${this.settings.title.text}`;
        }
        return subtitle;
    }
    /**
     * Process event handler.
     * @param match Matched routes.
     * @param callback Handler callback.
     */
    async processHandler(match, callback) {
        const output = match.detail.output;
        await super.processHandler(match, callback);
        if (match.detail.granted) {
            const title = this.formatTitle(output.subtitle);
            if (title) {
                document.title = title;
            }
            DOM.append(DOM.clear(this.settings.body || document.body), output.content);
            history.pushState(match.variables.state, document.title, match.detail.path);
        }
    }
};
__decorate([
    Class.Private()
], Main.prototype, "settings", void 0);
__decorate([
    Class.Private()
], Main.prototype, "formatTitle", null);
__decorate([
    Class.Protected()
], Main.prototype, "processHandler", null);
Main = __decorate([
    Class.Describe()
], Main);
exports.Main = Main;
