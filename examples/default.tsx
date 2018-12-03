/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to use an handler into the front-end application
 */
import * as Class from '@singleware/class';
import * as Application from '@singleware/application';
import * as DOM from '@singleware/jsx';
import * as Frontend from '../source';

/**
 * Default page class.
 */
@Class.Describe()
export class Default extends Class.Null {
  /**
   * Default processor.
   * @param match Route match.
   */
  @Class.Public()
  @Application.Processor({ path: '/' })
  public async defaultProcessor(match: Frontend.Match): Promise<void> {
    const output = match.detail.output;
    output.subtitle = 'Example';
    output.content = <h1>It's working</h1>;
  }
}
