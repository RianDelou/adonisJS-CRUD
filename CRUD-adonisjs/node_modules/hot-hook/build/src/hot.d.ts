import { InitOptions } from './types.js';
declare class Hot {
    #private;
    /**
     * Register the hot reload hooks
     */
    init(options: InitOptions): Promise<void>;
    /**
     * import.meta.hot.dispose internally calls this method
     *
     * Dispose is useful for cleaning up resources when a module is reloaded
     */
    dispose(url: string, callback: () => void): void;
    /**
     * import.meta.hot.decline internally calls this method
     *
     * Decline allows you to mark a module as not reloadable and
     * will trigger a full server reload when it changes
     */
    decline(url: string): void;
    /**
     * Dump the current state hot hook
     */
    dump(): Promise<any>;
}
declare const hot: Hot;
export { hot };
