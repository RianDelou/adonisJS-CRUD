import { SchemaFnOptions } from '../contracts';
/**
 * Enforces the value to be of type boolean. Also casts
 * string representation of a boolean to a boolean
 * type
 */
export declare function boolean(options?: SchemaFnOptions): (key: string, value?: string) => boolean;
export declare namespace boolean {
    var optional: (options?: SchemaFnOptions | undefined) => (key: string, value?: string | undefined) => boolean | undefined;
}
