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
     * Current opened path.
     */
    private openedPath;
    /**
     * Default constructor.
     * @param client Client instance.
     */
    constructor(client: Client);
    /**
     * Current opened path.
     */
    readonly path: string;
    /**
     * Opens the specified path.
     * @param path Path to be opened.
     */
    open(path: string): void;
}
