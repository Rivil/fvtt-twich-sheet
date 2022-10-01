/* globals
    Hooks
 */
"use strict";

import {MODULE_ID} from "./const.js";
import {Log} from "./log.js";

Hooks.once('devModeReady', ({registerPackageDebugFlag}) => {
    registerPackageDebugFlag(MODULE_ID);
});

Hooks.once('ready', () => {
   Log.log(true, "Game is apparnetly ready");
});