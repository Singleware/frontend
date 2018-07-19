/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Application from '@singleware/application';
import * as DOM from '@singleware/jsx';

import { Callable } from './types';
import { Input } from './input';
import { Output } from './output';
import { Settings } from './settings';

/**
 * Front-end main application class.
 */
@Class.Describe()
export class Main extends Application.Main<Input, Output> {
  /**
   * Application settings.
   */
  @Class.Private()
  private settings: Settings;

  /**
   * Filter event handler.
   * @param match Matched routes.
   * @param callback Handler callback.
   */
  @Class.Protected()
  protected async filter(match: Application.Match<Input, Output>, callback: Callable): Promise<void> {
    await super.filter(match, callback);
    if (match.length === 0 && match.detail.granted) {
      history.pushState(match.variables.state, match.variables.title, match.detail.path);
    }
  }

  /**
   * Process event handler.
   * @param match Matched routes.
   * @param callback Handler callback.
   */
  @Class.Protected()
  protected async process(match: Application.Match<Input, Output>, callback: Callable): Promise<void> {
    const output = match.detail.output;
    await super.process(match, callback);
    if (match.length === 0 && match.detail.granted) {
      if (output.title) {
        document.title = output.title;
      }
      if (output.content) {
        DOM.append(this.settings.body || document.body, output.content);
      }
    }
  }

  /**
   * Default constructor.
   * @param settings Application settings.
   */
  constructor(settings: Settings) {
    super({
      separator: '/',
      variable: /^\{([a-z_0-9]+)\}$/
    });
    this.settings = settings;
  }
}
