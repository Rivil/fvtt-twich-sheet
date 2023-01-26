/* globals
game
 */

"use strict";

import { MODULE_ID} from "./const.js";
import {Log} from "./log.js";

export const SETTINGS = {
    ACCESS_KEY: "access-key",
    USE_TWITCH_INTEGRATION: "use-twitch-integration",
    GAME_ID: 'game-id'
}

export function getSetting(settingName) {
    return game.settings.get(MODULE_ID, settingName);
}

export async function toggleSetting(settingName) {
    const curr = getSetting(settingName);
    return await game.settings.set(MODULE_ID, settingName, !curr);
}

export async function setSetting(settingName, value) {
    return await game.settings.set(MODULE_ID, settingName, value);
}

export function registerSettings() {
    Log.log(false,"Registering settings");

    game.settings.register(MODULE_ID, SETTINGS.USE_TWITCH_INTEGRATION, {
        name: game.i18n.localize(`${MODULE_ID}.settings.${SETTINGS.USE_TWITCH_INTEGRATION}.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.${SETTINGS.USE_TWITCH_INTEGRATION}.hint`),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        requiresReload: true
    });

    game.settings.register(MODULE_ID, SETTINGS.ACCESS_KEY, {
        name: game.i18n.localize(`${MODULE_ID}.settings.${SETTINGS.ACCESS_KEY}.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.${SETTINGS.ACCESS_KEY}.hint`),
        scope: "world",
        config: true,
        default: "",
        type: String,
        requireReload: false
    });

    game.settings.register(MODULE_ID, SETTINGS.GAME_ID, {
        name: game.i18n.localize(`${MODULE_ID}.settings.${SETTINGS.GAME_ID}.name`),
        hint: game.i18n.localize(`${MODULE_ID}.settings.${SETTINGS.GAME_ID}.hint`),
        scope: "world",
        config: true,
        default: "",
        type: String,
        requireReload: false
    });

}