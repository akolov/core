import type { GtmQueryParams } from './gtm-container';
/**
 * Options for `loadScript` function.
 */
export interface LoadScriptOptions {
    /**
     * Add url query string when load gtm.js with GTM ID.
     */
    queryParams?: GtmQueryParams;
    /**
     * Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible).
     */
    defer: boolean;
    /**
     * Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`.
     */
    compatibility: boolean;
    /**
     * Will add `nonce` to the script tag.
     *
     * @see [Using Google Tag Manager with a Content Security Policy](https://developers.google.com/tag-manager/web/csp)
     */
    nonce?: string;
}
/**
 * Load GTM script tag.
 *
 * @param id GTM ID.
 * @param config The config object.
 */
export declare function loadScript(id: string, config: LoadScriptOptions): void;
/**
 * Check if GTM script is in the document.
 *
 * @returns `true` if in the `document` is a `script` with `src` containing `googletagmanager.com/gtm.js`, otherwise `false`.
 */
export declare function hasScript(): boolean;
