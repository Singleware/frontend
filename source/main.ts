/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Application from '@singleware/application';
import * as JSX from '@singleware/jsx';

import * as Types from './types';

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
   * Current script list.
   */
  @Class.Private()
  private scriptList = <HTMLScriptElement[]>[];

  /**
   * Current style list.
   */
  @Class.Private()
  private styleList = <HTMLLinkElement[]>[];

  /**
   * Clear the specified list of elements by removing them from their parents.
   * @param list List of elements.
   */
  @Class.Private()
  private clearElements(list: HTMLElement[]): void {
    while (list.length) {
      (<HTMLElement>list.pop()).remove();
    }
  }

  /**
   * Set any output script from the specified output in the current document.
   * @param output Output information.
   */
  @Class.Private()
  private setScripts(output: Output): void {
    this.clearElements(this.scriptList);
    if (output.scripts) {
      for (const url of output.scripts) {
        const script = <HTMLScriptElement>JSX.create('script', { src: url });
        JSX.append(document.head, script);
        this.scriptList.push(script);
      }
    }
  }

  /**
   * Set any output style from the specified output in the current document.
   * @param output Output information.
   */
  @Class.Private()
  private setStyles(output: Output): void {
    this.clearElements(this.styleList);
    if (output.styles) {
      for (const url of output.styles) {
        const style = <HTMLLinkElement>JSX.create('link', { href: url, rel: 'stylesheet', type: 'text/css' });
        JSX.append(document.head, style);
        this.styleList.push(style);
      }
    }
  }

  /**
   * Set any defined title from the specified output in the current document.
   * @param output Output information.
   */
  @Class.Private()
  private setTitle(output: Output): void {
    if (output.subtitle) {
      if (this.settings.title.prefix) {
        document.title = `${this.settings.title.text}${this.settings.title.separator}${output.subtitle}`;
      } else {
        document.title = `${output.subtitle}${this.settings.title.separator}${this.settings.title.text}`;
      }
    } else {
      document.title = this.settings.title.text;
    }
  }

  /**
   * Process event handler.
   * @param match Matched routes.
   * @param callback Handler callback.
   */
  @Class.Protected()
  protected async processHandler(match: Types.Match, callback: Types.Callable): Promise<void> {
    const request = match.detail;
    await super.processHandler(match, callback);
    if (!request.error) {
      this.setTitle(request.output);
      this.setScripts(request.output);
      this.setStyles(request.output);
      JSX.append(JSX.clear(this.settings.body || document.body), request.output.content);
      history.pushState(match.variables.state, document.title, match.detail.path);
    }
  }

  /**
   * Default constructor.
   * @param settings Application settings.
   */
  constructor(settings: Settings) {
    super({ separator: '/', variable: /^\{([a-zA-Z_0-9]+)\}$/ });
    this.settings = settings;
  }
}
