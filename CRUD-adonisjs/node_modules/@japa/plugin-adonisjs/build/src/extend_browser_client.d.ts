import './types/extended.js';
import { CookieClient } from '@adonisjs/core/http';
/**
 * Registers custom decorators with the browser client
 */
export declare function extendBrowserClient(cookieClient: CookieClient, baseURL?: string): void;
