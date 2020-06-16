/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

import { Search } from '../search';

/**
 * Application service settings.
 */
export interface Settings {
  /**
   * Index path.
   */
  path?: string;
  /**
   * Index search.
   */
  search?: Search;
}
