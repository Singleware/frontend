/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Request search interface.
 */
export interface Search {
  [name: string]: string | boolean | (string | boolean)[];
}
