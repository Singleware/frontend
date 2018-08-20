/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Match } from './types';
export { Input } from './input';
export { Output } from './output';

import * as ServicesModule from './services';
export import Services = ServicesModule;

import * as MainModule from './main';
export import Main = MainModule.Main;

// Aliases
export const Filter = (<any>MainModule).Main.Filter;
export const Processor = (<any>MainModule).Main.Processor;
