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
 * Frontend main application class.
 */
@Class.Describe()
export class Main extends Application.Main<Input, Output> {
  /**
   * Application settings.
   */
  @Class.Private()
  private settings: Settings;

  /**
   * Get formatted application title based on the application settings.
   * @param subtitle Subtitle of the current page.
   * @returns Returns the formatted title or undefined when there is no title to be set.
   */
  @Class.Private()
  private formatTitle(subtitle?: string): string | undefined {
    if (this.settings.title) {
      if (!subtitle) {
        return this.settings.title.text;
      }
      if (this.settings.title.prefix) {
        return `${this.settings.title.text}${this.settings.title.separator || ' '}${subtitle}`;
      }
      return `${subtitle}${this.settings.title.separator || ' '}${this.settings.title.text}`;
    }
    return subtitle;
  }

  /**
   * Process event handler.
   * @param match Matched routes.
   * @param callback Handler callback.
   */
  @Class.Protected()
  protected async processHandler(match: Application.Match<Input, Output>, callback: Callable): Promise<void> {
    const output = match.detail.output;
    await super.processHandler(match, callback);
    if (match.detail.granted) {
      const title = this.formatTitle(output.subtitle);
      if (title) {
        document.title = title;
      }
      DOM.append(DOM.clear(this.settings.body || document.body), output.content);
      history.pushState(match.variables.state, document.title, match.detail.path);
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
