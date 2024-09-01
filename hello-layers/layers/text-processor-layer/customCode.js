"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSlugify = void 0;
var customSlugify = function (text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
};
exports.customSlugify = customSlugify;
