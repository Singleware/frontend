"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Bundler = require("@singleware/bundler");
// Compile the application bundle.
Bundler.compile({
    output: './examples/public/index.js',
    sources: [
        {
            name: 'source',
            path: './',
            package: true
        },
        {
            name: '.',
            path: './release/examples/application'
        }
    ]
});
//# sourceMappingURL=bundler.js.map