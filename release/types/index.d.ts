/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Match } from './types';
export { Input } from './input';
export { Output } from './output';
import * as ServicesModule from './services';
export declare const Services: typeof ServicesModule;
import * as MainModule from './main';
export declare const Main: typeof MainModule.Main;
export declare const Filter: any;
export declare const Processor: any;
