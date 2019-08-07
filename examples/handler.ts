/*!
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Backend from '@singleware/backend';

/**
 * File handler, example class.
 */
@Class.Describe()
export class Handler extends Backend.Handlers.File.Default {
  /**
   * Error processor.
   * @param match Request match.
   */
  @Class.Public()
  @Backend.Processor({ path: '#', exact: false, environment: { methods: '*' } })
  public errorProcessor(match: Backend.Match): void {
    super.exceptionResponse(match);
  }

  /**
   * Default processor.
   * @param match Request match.
   */
  @Class.Public()
  @Backend.Processor({ path: '/', exact: false, environment: { methods: '*' } })
  public async defaultProcessor(match: Backend.Match): Promise<void> {
    await super.defaultResponse(match);
  }

  /**
   * Index processor.
   * @param match Matched route.
   */
  @Backend.Processor({ path: '/home', exact: false, environment: { methods: '*' } })
  @Backend.Processor({ path: '/about', exact: false, environment: { methods: '*' } })
  @Class.Public()
  public async indexResponse(match: Backend.Match): Promise<void> {
    await this.setResponseFile(match.detail.output, this.indexFile);
  }
}
