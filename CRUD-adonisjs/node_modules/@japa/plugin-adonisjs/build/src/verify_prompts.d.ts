import type { Kernel } from '@adonisjs/core/ace';
import type { Runner } from '@japa/runner/core';
/**
 * Verifies prompts after every ace test
 */
export declare function verifyPrompts(ace: Kernel, runner: Runner): void;
