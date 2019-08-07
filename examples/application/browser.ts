/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Frontend from '../../source';

import { Handler } from './handler';

/**
 * Browser client, example class.
 */
@Class.Describe()
class Example extends Frontend.Main {
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
    this.addHandler(Handler, client.navigator);

    // Automatic start.
    this.start();
  }
}

// Starts the application.
const instance = new Example();
