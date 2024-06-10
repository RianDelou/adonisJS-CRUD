import { StringFnOptions } from '../contracts';
/**
 * Enforces the value to exist and be of type string
 */
export declare function string(options?: StringFnOptions): (key: string, value?: string) => string;
export declare namespace string {
    var optional: (options?: StringFnOptions | undefined) => (key: string, value?: string | undefined) => string | undefined;
}
