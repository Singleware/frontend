/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as DOM from '@singleware/jsx';

/**
 * Application output interface.
 */
export interface Output {
  /**
   * Response title.
   */
  title?: string;
  /**
   * Response content.
   */
  content?: string | number | Node | NodeList | Array<any> | DOM.Component | JSX.Element;
}
