/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
export { Main } from './main';
export { Title } from './title';
export { Input } from './input';
export { Output } from './output';
export { Request, Match } from './aliases';

// Declarations.
import * as Application from '@singleware/application';
import { MemberDecorator } from './aliases';

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

// Imported aliases.
import * as Services from './services';

/**
 * Services namespace.
 */
export import Services = Services;
