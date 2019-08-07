/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Main } from './main';
export { Title } from './title';
export { Input } from './input';
export { Output } from './output';
export { Request, Match } from './aliases';
import * as Application from '@singleware/application';
import { MemberDecorator } from './aliases';
/**
 * Decorates the specified member to filter an application request. (Alias for Main.Filter)
 * @param action Filter action settings.
 * @returns Returns the decorator method.
 */
export declare const Filter: (action: Application.Action) => MemberDecorator;
/**
 * Decorates the specified member to process an application request. (Alias for Main.Processor)
 * @param action Route action settings.
 * @returns Returns the decorator method.
 */
export declare const Processor: (action: Application.Action) => MemberDecorator;
import * as Services from './services';
/**
 * Services namespace.
 */
export import Services = Services;
