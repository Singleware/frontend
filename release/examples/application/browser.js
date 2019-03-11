"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Frontend = require("../../source");
const handler_1 = require("./handler");
/**
 * Browser client, example class.
 */
let Example = class Example extends Frontend.Main {
    /**
     * Default constructor.
     */
    constructor() {
        super({
            title: {
                text: 'Example',
                separator: ' - '
            }
        });
        // Add the client service.
        const client = this.addService(new Frontend.Services.Client({}));
        // Add the page handler.
        this.addHandler(handler_1.Handler, client.navigator);
        // Automatic start.
        this.start();
    }
};
Example = __decorate([
    Class.Describe()
], Example);
// Starts the application.
const instance = new Example();
