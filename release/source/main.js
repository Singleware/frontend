"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Application = require("@singleware/application");
const JSX = require("@singleware/jsx");
/**
 * Frontend main application class.
 */
let Main = class Main extends Application.Main {
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings) {
        super({ separator: '/', variable: /^\{([a-zA-Z_0-9]+)\}$/ });
        /**
         * Current script list.
         */
        this.scriptList = [];
        /**
         * Current style list.
         */
        this.styleList = [];
        this.settings = settings;
    }
    /**
     * Clear the specified list of elements by removing them from their parents.
     * @param list List of elements.
     */
    clearElements(list) {
        while (list.length) {
            list.pop().remove();
        }
    }
    /**
     * Set any output script from the specified output in the current document.
     * @param output Output information.
     */
    setScripts(output) {
        this.clearElements(this.scriptList);
        if (output.scripts) {
            for (const url of output.scripts) {
                const script = JSX.create('script', { src: url });
                JSX.append(document.head, script);
                this.scriptList.push(script);
            }
        }
    }
    /**
     * Set any output style from the specified output in the current document.
     * @param output Output information.
     */
    setStyles(output) {
        this.clearElements(this.styleList);
        if (output.styles) {
            for (const url of output.styles) {
                const style = JSX.create('link', { href: url, rel: 'stylesheet', type: 'text/css' });
                JSX.append(document.head, style);
                this.styleList.push(style);
            }
        }
    }
    /**
     * Set any defined title from the specified output in the current document.
     * @param output Output information.
     */
    setTitle(output) {
        if (output.subtitle) {
            if (this.settings.title.prefix) {
                document.title = `${this.settings.title.text}${this.settings.title.separator}${output.subtitle}`;
            }
            else {
                document.title = `${output.subtitle}${this.settings.title.separator}${this.settings.title.text}`;
            }
        }
        else {
            document.title = this.settings.title.text;
        }
    }
    /**
     * Process event handler.
     * @param match Matched routes.
     * @param callback Handler callback.
     */
    async processHandler(match, callback) {
        const request = match.detail;
        await super.processHandler(match, callback);
        if (request.error) {
            throw request.error;
        }
        else {
            this.setTitle(request.output);
            this.setScripts(request.output);
            this.setStyles(request.output);
            JSX.append(JSX.clear(this.settings.body || document.body), request.output.content);
            if (request.environment.local.state) {
                history.pushState(match.variables.state, document.title, match.detail.path);
            }
        }
    }
};
__decorate([
    Class.Private()
], Main.prototype, "settings", void 0);
__decorate([
    Class.Private()
], Main.prototype, "scriptList", void 0);
__decorate([
    Class.Private()
], Main.prototype, "styleList", void 0);
__decorate([
    Class.Private()
], Main.prototype, "clearElements", null);
__decorate([
    Class.Private()
], Main.prototype, "setScripts", null);
__decorate([
    Class.Private()
], Main.prototype, "setStyles", null);
__decorate([
    Class.Private()
], Main.prototype, "setTitle", null);
__decorate([
    Class.Protected()
], Main.prototype, "processHandler", null);
Main = __decorate([
    Class.Describe()
], Main);
exports.Main = Main;
//# sourceMappingURL=main.js.map