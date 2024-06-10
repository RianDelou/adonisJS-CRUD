import picomatch from 'picomatch';
export declare class Matcher {
    #private;
    constructor(rootDirectory: string, patterns?: picomatch.Glob);
    /**
     * Check if a path matches the patterns
     */
    match(filePath: string): boolean;
}
