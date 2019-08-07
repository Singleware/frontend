/*!
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
   * Current path.
   */
  @Class.Private()
  private current: string;

  /**
   * Renders the specified path according to the given state.
   * @param path Path to be rendered.
   * @param state Determines whether the renderer will preserves the current state.
   */
  @Class.Private()
  private renderPath(path: string, state: boolean): void {
    this.client.onReceive.notifyAll({
      path: path,
      input: {},
      output: {},
      environment: {
        local: {
          state: state
        },
        shared: {}
      },
      granted: true
    });
  }

  /**
   * Pop State, event handler.
   */
  @Class.Private()
  private popStateHandler(): void {
    this.current = document.location.pathname;
    this.renderPath(document.location.pathname, false);
  }

  /**
   * Default constructor.
   * @param client Client instance.
   * @param path Initial path.
   */
  constructor(client: Client, path: string) {
    super();
    globalThis.addEventListener('popstate', this.popStateHandler.bind(this));
    this.client = client;
    this.current = path;
  }

  /**
   * Gets the current path.
   */
  @Class.Public()
  public get path(): string {
    return this.current;
  }

  /**
   * Opens the specified path.
   * @param path Path to be opened.
   */
  @Class.Public()
  public open(path: string): void {
    this.current = Path.resolve(Path.dirname(this.current), path);
    this.renderPath(this.current, true);
  }

  /**
   * Reopens the current path.
   */
  @Class.Public()
  public reload(): void {
    this.renderPath(this.current, false);
  }
}
