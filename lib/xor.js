/*
 * Buffer xor module
 * Copyright (c) Agora S.A.
 * Licensed under the MIT License.
 * Version: 1.0
 */

try {
    module.exports = require('./xor.fallback');
} catch (e) {
    console.error("xor.node seems not to have been built. Run npm install.")
    throw e;
}
