/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as DOM from '@singleware/jsx';

/**
 * Application output interface.
 */
export interface Output {
  /**
   * Response subtitle.
   */
  subtitle?: string;
  /**
   * Response scripts.
   */
  scripts?: string[];
  /**
   * Response styles.
   */
  styles?: string[];
  /**
   * Response content.
   */
  content?: string | Node | NodeList | HTMLElement | HTMLCollection | DOM.Component | JSX.Element;
}
