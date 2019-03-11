/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Title } from './title';
export { Match } from './types';
export { Input } from './input';
export { Output } from './output';

import * as Services from './services';
export import Services = Services;

import * as Module from './main';
export import Main = Module.Main;

/**
 * Declarations.
 */
import * as Application from '@singleware/application';
import { MemberDecorator } from './types';

/**
 * Decorates the specified member to filter an application request. (Alias for Main.Filter)
 * @param action Filter action settings.
 * @returns Returns the decorator method.
 */
export const Filter = (action: Application.Action): MemberDecorator => Application.Main.Filter(action);

/**
 * Decorates the specified member to process an application request. (Alias for Main.Processor)
 * @param action Route action settings.
 * @returns Returns the decorator method.
 */
export const Processor = (action: Application.Action): MemberDecorator => Application.Main.Processor(action);
