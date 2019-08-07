/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
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
    private current;
    /**
     * Renders the specified path according to the given state.
     * @param path Path to be rendered.
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
     */
    constructor(client: Client, path: string);
    /**
     * Gets the current path.
     */
    readonly path: string;
    /**
     * Opens the specified path.
     * @param path Path to be opened.
     */
    open(path: string): void;
    /**
     * Reopens the current path.
     */
    reload(): void;
}
