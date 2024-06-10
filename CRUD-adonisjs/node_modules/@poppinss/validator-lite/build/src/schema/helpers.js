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
exports.ensureValue = exports.BOOLEAN_NEGATIVES = exports.BOOLEAN_POSITIVES = void 0;
/**
 * Following values are considered as "true"
 */
exports.BOOLEAN_POSITIVES = ['1', 1, 'true', true];
/**
 * Following values are considered as "false"
 */
exports.BOOLEAN_NEGATIVES = ['0', 0, 'false', false];
/**
 * Ensures the value to exist
 */
function ensureValue(key, value, message) {
    if (!value) {
        throw new Error(message || `Missing environment variable "${key}"`);
    }
}
exports.ensureValue = ensureValue;
