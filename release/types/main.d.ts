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
     * Get formatted application title based on the application settings.
     * @param subtitle Subtitle of the current page.
     * @returns Returns the formatted title or undefined when there is no title to be set.
     */
    private formatTitle;
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
