/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import { Search } from './search';

/**
 * Request helper class.
 */
@Class.Describe()
export class Helper extends Class.Null {
  /**
   * Get a new map containing all search parameters from the specified search string.
   * @param search Search string.
   * @returns Returns the new map.
   */
  @Class.Public()
  public static parseURLSearch(search: string): Search {
    const map = <Search>{};
    for (const entry of search.split('&')) {
      const [key, value] = entry.split('=');
      const name = key.trim();
      if (name.length > 0) {
        const decoded = decodeURIComponent(value.trim());
        const current = map[name];
        if (current !== void 0) {
          if (current instanceof Array) {
            current.push(decoded || true);
          } else {
            map[name] = [current, decoded || true];
          }
        } else {
          map[name] = decoded || true;
        }
      }
    }
    return map;
  }
}
