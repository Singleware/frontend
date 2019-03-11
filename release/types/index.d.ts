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
export declare const Filter: (action: Application.Action) => MemberDecorator;
/**
 * Decorates the specified member to process an application request. (Alias for Main.Processor)
 * @param action Route action settings.
 * @returns Returns the decorator method.
 */
export declare const Processor: (action: Application.Action) => MemberDecorator;
