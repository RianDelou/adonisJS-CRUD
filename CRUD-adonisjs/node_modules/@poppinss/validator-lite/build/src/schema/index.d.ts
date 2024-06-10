import { number } from './number';
import { string } from './string';
import { boolean } from './boolean';
import { oneOf } from './oneOf';
export declare const schema: {
    number: typeof number;
    string: typeof string;
    boolean: typeof boolean;
    enum: typeof oneOf;
};
