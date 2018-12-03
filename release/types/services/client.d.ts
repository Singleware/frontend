/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Observable from '@singleware/observable';
import * as Application from '@singleware/application';
import { Settings } from './settings';
import { Input } from '../input';
import { Output } from '../output';
/**
 * Front-end browser service class.
 */
export declare class Client extends Class.Null implements Application.Service<Input, Output> {
    /**
     * Current opened path.
     */
    private opened;
    /**
     * Service settings.
     */
    private settings;
    /**
     * Service events.
     */
    private events;
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings: Settings);
    /**
     * Current opened path.
     */
    readonly path: string;
    /**
     * Receive request event.
     */
    readonly onReceive: Observable.Subject<Application.Request<Input, Output>>;
    /**
     * Send response event.
     */
    readonly onSend: Observable.Subject<Application.Request<Input, Output>>;
    /**
     * Error response event.
     */
    readonly onError: Observable.Subject<Application.Request<Input, Output>>;
    /**
     * Starts the service.
     */
    start(): void;
    /**
     * Stops the service.
     */
    stop(): void;
    /**
     * Opens the specified path.
     * @param path Path to be opened.
     */
    open(path: string): void;
}
