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

Hooks.on('updateActor', (document, change, options, userId) => {
    console.log("UPDATE HOOK:");
    console.log("document: " + JSON.stringify(document));
    console.log("change: " + JSON.stringify(change));
    console.log("options: " + JSON.stringify(options));
    console.log("userId:" + JSON.stringify(userId));
});