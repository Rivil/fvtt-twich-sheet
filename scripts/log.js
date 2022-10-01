/* globals
    game
 */
"use strict";


import {MODULE_ID} from "./const.js";

export class Log {

    static log(force, ...args) {
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(MODULE_ID);

        if (shouldLog) {
            console.log(MODULE_ID, '|', ...args);
        }
    }
}