import * as Application from '@singleware/application';
import { Callable } from './types';
import { Input } from './input';
import { Output } from './output';
import { Settings } from './settings';
/**
 * Frontend main application class.
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
    protected filterHandler(match: Application.Match<Input, Output>, callback: Callable): Promise<void>;
    /**
     * Process event handler.
     * @param match Matched routes.
     * @param callback Handler callback.
     */
    protected processHandler(match: Application.Match<Input, Output>, callback: Callable): Promise<void>;
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings: Settings);
}
