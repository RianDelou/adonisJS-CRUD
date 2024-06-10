"use strict";
/*
 * @poppinss/validator-lite
 *
 * (c) Poppinss
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.boolean = void 0;
const helpers_1 = require("./helpers");
/**
 * Casts a string value to a boolean
 */
function castToBoolean(key, value, message) {
    if (helpers_1.BOOLEAN_POSITIVES.includes(value)) {
        return true;
    }
    if (helpers_1.BOOLEAN_NEGATIVES.includes(value)) {
        return false;
    }
    throw new Error(message ||
        `Value for environment variable "${key}" must be a boolean, instead received "${value}"`);
}
/**
 * Enforces the value to be of type boolean. Also casts
 * string representation of a boolean to a boolean
 * type
 */
function boolean(options) {
    return function validate(key, value) {
        (0, helpers_1.ensureValue)(key, value, options?.message);
        return castToBoolean(key, value, options?.message);
    };
}
exports.boolean = boolean;
/**
 * Same as boolean, but allows undefined values as well.
 */
boolean.optional = function optionalBoolean(options) {
    return function validate(key, value) {
        if (!value) {
            return undefined;
        }
        return castToBoolean(key, value, options?.message);
    };
};
