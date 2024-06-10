import './types/extended.js';
import { CookieClient } from '@adonisjs/core/http';
/**
 * Extending the "@japa/api-client" plugin with custom methods to
 * set cookies, session, csrf token and authenticated user.
 */
export declare function extendApiClient(cookieClient: CookieClient): void;
