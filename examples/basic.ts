/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use the front-end application for generic
 * purposes.
 */
import * as Frontend from '../source';

import { Default } from './default';

// Creates an application.
const browser = new Frontend.Main({});

// Add the browser client service.
browser.addService(Frontend.Services.Client, {});

// Add the default handler.
browser.addHandler(Default);

// Starts the listening.
browser.start();
