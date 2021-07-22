"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasScript = exports.loadScript = void 0;
/**
 * Load GTM script tag.
 *
 * @param id GTM ID.
 * @param config The config object.
 */
function loadScript(id, config) {
    var _a, _b, _c;
    const doc = document;
    const script = doc.createElement('script');
    window.dataLayer = (_a = window.dataLayer) !== null && _a !== void 0 ? _a : [];
    (_b = window.dataLayer) === null || _b === void 0 ? void 0 : _b.push({
        event: 'gtm.js',
        'gtm.start': new Date().getTime()
    });
    if (!id) {
        return;
    }
    script.async = !config.defer;
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    script.defer = Boolean(config.defer || config.compatibility);
    if (config.nonce) {
        script.nonce = config.nonce;
    }
    const queryString = new URLSearchParams({
        id,
        ...((_c = config.queryParams) !== null && _c !== void 0 ? _c : {})
    });
    script.src = `https://www.googletagmanager.com/gtm.js?${queryString}`;
    doc.head.appendChild(script);
}
exports.loadScript = loadScript;
/**
 * Check if GTM script is in the document.
 *
 * @returns `true` if in the `document` is a `script` with `src` containing `googletagmanager.com/gtm.js`, otherwise `false`.
 */
function hasScript() {
    return Array.from(document.getElementsByTagName('script')).some((script) => script.src.includes('googletagmanager.com/gtm.js'));
}
exports.hasScript = hasScript;
//# sourceMappingURL=utils.js.map