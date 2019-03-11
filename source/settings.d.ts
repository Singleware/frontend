/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Title } from './title';

/**
 * Application settings.
 */
export interface Settings {
  /**
   * Main title.
   */
  title: Title;
  /**
   * Body element.
   */
  body?: HTMLElement;
}
