import { SchemaFnOptions } from '../contracts';
/**
 * Enforces value to be one of the defined choices
 */
export declare function oneOf<K extends any>(choices: readonly K[], options?: SchemaFnOptions): (key: string, value?: string) => K;
export declare namespace oneOf {
    var optional: <K extends unknown>(choices: readonly K[], options?: SchemaFnOptions | undefined) => (key: string, value?: string | undefined) => K | undefined;
}
