/* globals
    Hooks
    game
 */
"use strict";

import {MODULE_ID} from "./const.js";
import {Log} from "./log.js";
import {Postdata} from "./postdata.js";

Hooks.once('devModeReady', ({registerPackageDebugFlag}) => {
    registerPackageDebugFlag(MODULE_ID);
});

Hooks.once('ready', () => {
   Log.log(true, "Game is apparnetly ready");
   game.actors.forEach((x) => {
       Postdata.PostToServer(JSON.stringify(x))
   });
});