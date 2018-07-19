import * as Application from '@singleware/application';
import { Callable } from './types';
import { Input } from './input';
import { Output } from './output';
import { Settings } from './settings';
/**
 * Front-end main application class.
 */
export declare class Main extends Application.Main<Input, Output> {
    /**
     * Application settings.
     */
    private settings;
    /**
     * Filter event handler.
     * @param match Matched routes.
     * @param callback Handler callback.
     */
    protected filter(match: Application.Match<Input, Output>, callback: Callable): Promise<void>;
    /**
     * Process event handler.
     * @param match Matched routes.
     * @param callback Handler callback.
     */
    protected process(match: Application.Match<Input, Output>, callback: Callable): Promise<void>;
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings: Settings);
}
