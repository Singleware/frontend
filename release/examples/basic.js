"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the front-end application for generic
 * purposes.
 */
const Frontend = require("../source");
const default_1 = require("./default");
// Creates an application.
const browser = new Frontend.Main({
    title: {
        text: 'Example',
        separator: ' / '
    }
});
// Add the browser client service.
browser.addService(Frontend.Services.Client, {});
// Add the default handler.
browser.addHandler(default_1.Default);
// Starts the listening.
browser.start();
