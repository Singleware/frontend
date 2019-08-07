/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Backend from '@singleware/backend';

import { Handler } from './handler';

/**
 * HTTP server, example class.
 */
@Class.Describe()
class Example extends Backend.Main {
  /**
   * Default constructor.
   */
  constructor() {
    super({});
    // Add console logger.
    this.addLogger(new Backend.Loggers.Console());

    // Add HTTP service.
    this.addService(
      new Backend.Services.Server({
        debug: true,
        port: 8080
      })
    );

    // Add default file handler.
    this.addHandler(Handler, {
      strictTypes: true,
      baseDirectory: './examples/public',
      indexFile: 'index.html',
      types: {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript'
      }
    });

    // Automatic start.
    this.start();
  }
}

// Start application.
new Example();
