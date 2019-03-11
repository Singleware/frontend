/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Application from '@singleware/application';

import { Input } from './input';
import { Output } from './output';

/**
 * Type declaration for callable members.
 */
export type Callable<T = any> = (...parameters: any[]) => T;

/**
 * Type declaration for member decorators.
 */
export type MemberDecorator = <T>(target: Object, property: string | symbol, descriptor: TypedPropertyDescriptor<T>) => any;

/**
 * Type declaration for application request.
 */
export type Request = Application.Request<Input, Output>;

/**
 * Type declaration for route match.
 */
export type Match = Application.Match<Input, Output>;
