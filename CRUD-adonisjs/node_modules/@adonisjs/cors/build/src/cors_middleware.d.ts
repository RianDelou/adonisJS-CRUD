import { HttpContext } from '@adonisjs/core/http';
import type { NextFn } from '@adonisjs/core/types/http';
import type { CorsConfig } from './types.js';
export default class CorsMiddleware {
    #private;
    constructor(config: CorsConfig);
    handle(ctx: HttpContext, next: NextFn): Promise<any>;
}
