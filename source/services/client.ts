/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Observable from '@singleware/observable';
import * as Application from '@singleware/application';
import * as Path from '@singleware/path';

import { Settings } from './settings';
import { Input } from '../input';
import { Output } from '../output';

/**
 * Front-end browser service class.
 */
@Class.Describe()
export class Client extends Class.Null implements Application.Service<Input, Output> {
  /**
   * Current opened path.
   */
  @Class.Private()
  private opened: string = '';

  /**
   * Service settings.
   */
  @Class.Private()
  private settings: Settings;

  /**
   * Service events.
   */
  @Class.Private()
  private events = {
    receive: new Observable.Subject<Application.Request<Input, Output>>(),
    send: new Observable.Subject<Application.Request<Input, Output>>(),
    error: new Observable.Subject<Application.Request<Input, Output>>()
  };

  /**
   * Default constructor.
   * @param settings Application settings.
   */
  constructor(settings: Settings) {
    super();
    this.settings = settings;
  }

  /**
   * Current opened path.
   */
  @Class.Public()
  public get path(): string {
    return this.opened;
  }

  /**
   * Receive request event.
   */
  @Class.Public()
  public get onReceive(): Observable.Subject<Application.Request<Input, Output>> {
    return this.events.receive;
  }

  /**
   * Send response event.
   */
  @Class.Public()
  public get onSend(): Observable.Subject<Application.Request<Input, Output>> {
    return this.events.send;
  }

  /**
   * Error response event.
   */
  @Class.Public()
  public get onError(): Observable.Subject<Application.Request<Input, Output>> {
    return this.events.error;
  }

  /**
   * Starts the service.
   */
  @Class.Public()
  public start(): void {
    this.open(this.settings.path || location.pathname);
  }

  /**
   * Stops the service.
   */
  @Class.Public()
  public stop(): void {}

  /**
   * Opens the specified path.
   * @param path Path to be opened.
   */
  @Class.Public()
  public open(path: string): void {
    this.events.receive.notifyAll({
      path: this.opened = Path.resolve(Path.dirname(this.path), path),
      input: {},
      output: {},
      environment: {}
    });
  }
}
