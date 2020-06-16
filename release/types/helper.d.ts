/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import { Search } from './search';
/**
 * Request helper class.
 */
export declare class Helper extends Class.Null {
    /**
     * Get a new map containing all search parameters from the specified search string.
     * @param search Search string.
     * @returns Returns the new map.
     */
    static parseURLSearch(search: string): Search;
}
