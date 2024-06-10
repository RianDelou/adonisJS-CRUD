import type { HttpContext } from '@adonisjs/core/http';
type CorsOriginValues = boolean | string | string[];
type CorsHeaderValues = CorsOriginValues;
export type CorsConfig = {
    enabled: boolean | ((ctx: HttpContext) => boolean);
    origin: CorsOriginValues | ((origin: string, ctx: HttpContext) => CorsOriginValues);
    methods: string[];
    headers: CorsHeaderValues | ((headers: string[], ctx: HttpContext) => CorsHeaderValues);
    exposeHeaders: string[];
    credentials: boolean;
    maxAge: number;
};
export {};
