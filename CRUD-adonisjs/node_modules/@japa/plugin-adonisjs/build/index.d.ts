import './src/types/extended.js';
import type { PluginFn } from '@japa/runner/types';
import type { ApplicationService } from '@adonisjs/core/types';
/**
 * The AdonisJS plugin acts as a bridge between an AdonisJS application
 * and the Japa test runner.
 *
 * The plugin extends the Japa runner and the ecosystem plugins to have to
 * first class knowledge about AdonisJS
 */
export declare function pluginAdonisJS(app: ApplicationService, options?: {
    baseURL: string;
}): PluginFn;
