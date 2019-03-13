/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Path from '@singleware/path';

import { Client } from './client';

/**
 * Front-end navigator class.
 */
@Class.Describe()
export class Navigator extends Class.Null {
  /**
   * Client instance.
   */
  @Class.Private()
  private client: Client;

  /**
   * Current opened path.
   */
  @Class.Private()
  private openedPath: string = '';

  /**
   * Default constructor.
   * @param client Client instance.
   */
  constructor(client: Client) {
    super();
    this.client = client;
  }

  /**
   * Current opened path.
   */
  @Class.Public()
  public get path(): string {
    return this.openedPath;
  }

  /**
   * Opens the specified path.
   * @param path Path to be opened.
   */
  @Class.Public()
  public open(path: string): void {
    this.openedPath = Path.resolve(Path.dirname(this.openedPath), path);
    this.client.onReceive.notifyAll({
      path: this.openedPath,
      input: {},
      output: {},
      environment: {
        local: {},
        shared: {}
      },
      granted: true
    });
  }
}
