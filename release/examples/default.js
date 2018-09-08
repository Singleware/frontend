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
 *
 * The proposal of this example is to show how to use an handler into the front-end application
 */
const Class = require("@singleware/class");
const Application = require("@singleware/application");
const DOM = require("@singleware/jsx");
/**
 * Default page class.
 */
let Default = class Default {
    /**
     * Default processor.
     * @param match Route match.
     */
    async defaultProcessor(match) {
        const output = match.detail.output;
        output.subtitle = 'Example';
        output.content = DOM.create("h1", null, "It's working");
    }
};
__decorate([
    Class.Public(),
    Application.Processor({ path: '/' })
], Default.prototype, "defaultProcessor", null);
Default = __decorate([
    Class.Describe()
], Default);
exports.Default = Default;
