import * as Application from '@singleware/application';
import * as Types from './types';
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
     * Current script list.
     */
    private scriptList;
    /**
     * Current style list.
     */
    private styleList;
    /**
     * Clear the specified list of elements by removing them from their parents.
     * @param list List of elements.
     */
    private clearElements;
    /**
     * Set any output script from the specified output in the current document.
     * @param output Output information.
     */
    private setScripts;
    /**
     * Set any output style from the specified output in the current document.
     * @param output Output information.
     */
    private setStyles;
    /**
     * Set any defined title from the specified output in the current document.
     * @param output Output information.
     */
    private setTitle;
    /**
     * Process event handler.
     * @param match Matched routes.
     * @param callback Handler callback.
     */
    protected processHandler(match: Types.Match, callback: Types.Callable): Promise<void>;
    /**
     * Default constructor.
     * @param settings Application settings.
     */
    constructor(settings: Settings);
}
