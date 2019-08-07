/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Application title settings.
 */
export interface Title {
  /**
   * Title text.
   */
  text: string;
  /**
   * Determines whether the title is prefixed or not.
   */
  prefix?: boolean;
  /**
   * Title separator.
   */
  separator: string;
}
