/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Observable from '@singleware/observable';
import * as Application from '@singleware/application';

import * as Aliases from '../aliases';

import { Input } from '../input';
import { Output } from '../output';
import { Settings } from './settings';
import { Navigator } from './navigator';

/**
 * Front-end client class.
 */
@Class.Describe()
export class Client extends Class.Null implements Application.Service<Input, Output> {
  /**
   * Service settings.
   */
  @Class.Private()
  private settings: Settings;

  /**
   * Navigator instance.
   */
  @Class.Private()
  private navigation: Navigator;

  /**
   * Receive subject instance.
   */
  @Class.Private()
  private receiveSubject = new Observable.Subject<Aliases.Request>();

  /**
   * Send subject instance.
   */
  @Class.Private()
  private sendSubject = new Observable.Subject<Aliases.Request>();

  /**
   * Error subject instance.
   */
  @Class.Private()
  private errorSubject = new Observable.Subject<Aliases.Request>();

  /**
   * Default constructor.
   * @param settings Application settings.
   */
  constructor(settings: Settings) {
    super();
    this.settings = settings;
    this.navigation = new Navigator(this, this.settings.path || location.pathname);
  }

  /**
   * Gets the current opened path.
   */
  @Class.Public()
  public get path(): string {
    return this.navigation.path;
  }

  /**
   * Gets the navigator instance.
   */
  @Class.Public()
  public get navigator(): Navigator {
    return this.navigation;
  }

  /**
   * Receive request event.
   */
  @Class.Public()
  public get onReceive(): Observable.Subject<Aliases.Request> {
    return this.receiveSubject;
  }

  /**
   * Send response event.
   */
  @Class.Public()
  public get onSend(): Observable.Subject<Aliases.Request> {
    return this.sendSubject;
  }

  /**
   * Error response event.
   */
  @Class.Public()
  public get onError(): Observable.Subject<Aliases.Request> {
    return this.errorSubject;
  }

  /**
   * Starts the service.
   */
  @Class.Public()
  public start(): void {
    this.navigation.reload();
  }

  /**
   * Stops the service.
   */
  @Class.Public()
  public stop(): void {}
}
