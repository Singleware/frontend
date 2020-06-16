/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Search } from '../search';
import { Client } from './client';
/**
 * Front-end navigator class.
 */
export declare class Navigator extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Current path.
     */
    private currentPath;
    /**
     * Current search.
     */
    private currentSearch;
    /**
     * Renders the specified path according to the given state.
     * @param path Path to be rendered.
     * @param search Search arguments.
     * @param state Determines whether the renderer will preserves the current state.
     */
    private renderPath;
    /**
     * Pop State, event handler.
     */
    private popStateHandler;
    /**
     * Default constructor.
     * @param client Client instance.
     * @param path Initial path.
     * @param search Initial search.
     */
    constructor(client: Client, path: string, search?: Search);
    /**
     * Gets the current path.
     */
    get path(): string;
    /**
     * Gets the current search.
     */
    get search(): Search;
    /**
     * Opens the specified path.
     * @param path Path to be opened.
     * @param search Search arguments.
     */
    open(path: string, search?: Search): void;
    /**
     * Reopens the current path.
     */
    reload(): void;
}
