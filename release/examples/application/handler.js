"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const JSX = require("@singleware/jsx");
const Frontend = require("../../source");
/**
 * Default handler, example class.
 */
let Handler = class Handler extends Class.Null {
    /**
     * Default constructor.
     * @param client Client instance.
     */
    constructor(navigator) {
        super();
        this.navigator = navigator;
    }
    /**
     * Default page processor.
     * @param match Route match.
     */
    async defaultProcessor(match) {
        const output = match.detail.output;
        output.subtitle = 'Home';
        output.styles = ['/home.css'];
        output.scripts = ['/home.js'];
        output.content = (JSX.create("div", null,
            JSX.create("h1", null, "Home page"),
            JSX.create("nav", null,
                JSX.create("a", { onClick: () => this.navigator.open('/home') }, "Home"),
                " | ",
                JSX.create("a", { onClick: () => this.navigator.open('/about') }, "About"))));
    }
    /**
     * About page processor.
     * @param match Route match.
     */
    async aboutProcessor(match) {
        const output = match.detail.output;
        output.subtitle = 'About';
        output.styles = ['/about.css'];
        output.scripts = ['/about.js'];
        output.content = (JSX.create("div", null,
            JSX.create("h1", null, "About page"),
            JSX.create("nav", null,
                JSX.create("a", { onClick: () => this.navigator.open('/home') }, "Home"),
                " | ",
                JSX.create("a", { onClick: () => this.navigator.open('/about') }, "About"))));
    }
};
__decorate([
    Class.Private()
], Handler.prototype, "navigator", void 0);
__decorate([
    Class.Public(),
    Frontend.Processor({ path: '/' }),
    Frontend.Processor({ path: '/home' })
], Handler.prototype, "defaultProcessor", null);
__decorate([
    Class.Public(),
    Frontend.Processor({ path: '/about' })
], Handler.prototype, "aboutProcessor", null);
Handler = __decorate([
    Class.Describe()
], Handler);
exports.Handler = Handler;
//# sourceMappingURL=handler.js.map