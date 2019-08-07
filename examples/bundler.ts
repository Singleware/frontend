/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Bundler from '@singleware/bundler';

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
