/* globals
    Hooks
    game
 */
"use strict";

import {MODULE_ID} from "./const.js";
import {Log} from "./log.js";
import {Postdata} from "./postdata.js";
import {getSetting, registerSettings, SETTINGS} from "./settings.js";
import {Actor} from "./ViewModel/Actor.js";

Hooks.once("init", async function() {
    registerSettings();
})

Hooks.once('devModeReady', ({registerPackageDebugFlag}) => {
    registerPackageDebugFlag(MODULE_ID);
});

Hooks.once('ready', () => {
   Log.log(true, "Game is apparnetly ready");
   //console.log(JSON.stringify(game));
   game.actors.forEach((x) => {
       let a = new Actor(getSetting(SETTINGS.GAME_ID), x);
       console.log(a);
       Postdata.PostToServer(JSON.stringify(a));
   });
});

Hooks.on('updateActor', (document, change, options, userId) => {
    console.log("UPDATE HOOK:");
    console.log("document: " + JSON.stringify(document));
    console.log("change: " + JSON.stringify(change));
    console.log("options: " + JSON.stringify(options));
    console.log("userId:" + JSON.stringify(userId));
});