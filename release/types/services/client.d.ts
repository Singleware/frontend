import * as Observable from '@singleware/observable';
import * as Application from '@singleware/application';
import { Settings } from './settings';
import { Input } from '../input';
import { Output } from '../output';
/**
 * Front-end browser service class.
 */
export declare class Client implements Application.Service<Input, Output> {
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
     * Receive request event.
     */
    readonly onReceive: Observable.Subject<Application.Request<Input, Output>>;
    /**
     * Send response event.
     */
    readonly onSend: Observable.Subject<Application.Request<Input, Output>>;
    /**
     * Starts the service.
     */
    start(): void;
    /**
     * Stops the service.
     */
    stop(): void;
}
