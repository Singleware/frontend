/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as JSX from '@singleware/jsx';
import * as Frontend from '../../source';

/**
 * Default handler, example class.
 */
@Class.Describe()
export class Handler extends Class.Null {
  /**
   * Client instance.
   */
  @Class.Private()
  private navigator: Frontend.Services.Navigator;

  /**
   * Default constructor.
   * @param client Client instance.
   */
  constructor(navigator: Frontend.Services.Navigator) {
    super();
    this.navigator = navigator;
  }

  /**
   * Default page processor.
   * @param match Route match.
   */
  @Class.Public()
  @Frontend.Processor({ path: '/' })
  @Frontend.Processor({ path: '/home' })
  public async defaultProcessor(match: Frontend.Match): Promise<void> {
    const output = match.detail.output;
    output.subtitle = 'Home';
    output.styles = ['/home.css'];
    output.scripts = ['/home.js'];
    output.content = (
      <div>
        <h1>Home page</h1>
        <nav>
          <a onClick={() => this.navigator.open('/home')}>Home</a> | <a onClick={() => this.navigator.open('/about')}>About</a>
        </nav>
      </div>
    );
  }

  /**
   * About page processor.
   * @param match Route match.
   */
  @Class.Public()
  @Frontend.Processor({ path: '/about' })
  public async aboutProcessor(match: Frontend.Match): Promise<void> {
    const output = match.detail.output;
    output.subtitle = 'About';
    output.styles = ['/about.css'];
    output.scripts = ['/about.js'];
    output.content = (
      <div>
        <h1>About page</h1>
        <nav>
          <a onClick={() => this.navigator.open('/home')}>Home</a> | <a onClick={() => this.navigator.open('/about')}>About</a>
        </nav>
      </div>
    );
  }
}
