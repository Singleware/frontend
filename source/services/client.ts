/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Observable from '@singleware/observable';
import * as Application from '@singleware/application';

import { Settings } from './settings';
import { Input } from '../input';
import { Output } from '../output';

/**
 * Front-end browser service class.
 */
@Class.Describe()
export class Client implements Application.Service<Input, Output> {
  /**
   * Service settings.
   */
  @Class.Private() private settings: Settings;

  /**
   * Service events.
   */
  @Class.Private()
  private events = {
    receive: new Observable.Subject<Application.Request<Input, Output>>(),
    send: new Observable.Subject<Application.Request<Input, Output>>()
  };

  /**
   * Default constructor.
   * @param settings Application settings.
   */
  constructor(settings: Settings) {
    this.settings = settings;
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
   * Starts the service.
   */
  @Class.Public()
  public start(): void {
    this.events.receive.notifyAll({
      path: this.settings.path || location.pathname,
      input: {},
      output: {},
      environment: {}
    });
  }

  /**
   * Stops the service.
   */
  @Class.Public()
  public stop(): void {}
}
