/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Path from '@singleware/path';

import { Search } from '../search';
import { Helper } from '../helper';

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
  private currentPath: string;

  /**
   * Current search.
   */
  @Class.Private()
  private currentSearch: Search;

  /**
   * Renders the specified path according to the given state.
   * @param path Path to be rendered.
   * @param search Search arguments.
   * @param state Determines whether the renderer will preserves the current state.
   */
  @Class.Private()
  private renderPath(path: string, search: Search, state: boolean): void {
    this.client.onReceive.notifyAll({
      path: path,
      input: {
        search: search
      },
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
    this.currentPath = document.location.pathname;
    this.currentSearch = Helper.parseURLSearch(document.location.search.substr(1));
    this.renderPath(this.currentPath, this.currentSearch, false);
  }

  /**
   * Default constructor.
   * @param client Client instance.
   * @param path Initial path.
   * @param search Initial search.
   */
  constructor(client: Client, path: string, search?: Search) {
    super();
    this.client = client;
    this.currentPath = path;
    this.currentSearch = search || {};
    globalThis.addEventListener('popstate', this.popStateHandler.bind(this));
  }

  /**
   * Gets the current path.
   */
  @Class.Public()
  public get path(): string {
    return this.currentPath;
  }

  /**
   * Gets the current search.
   */
  @Class.Public()
  public get search(): Search {
    return this.currentSearch;
  }

  /**
   * Opens the specified path.
   * @param path Path to be opened.
   * @param search Search arguments.
   */
  @Class.Public()
  public open(path: string, search?: Search): void {
    this.currentPath = Path.resolve(Path.dirname(this.currentPath), path);
    this.currentSearch = search || {};
    this.renderPath(this.currentPath, this.currentSearch, true);
  }

  /**
   * Reopens the current path.
   */
  @Class.Public()
  public reload(): void {
    this.renderPath(this.currentPath, this.currentSearch, false);
  }
}
