/* globals


 */

"use strict";

import {getSetting, SETTINGS} from "./settings.js";

export class Postdata
{
    static ConfirmSystem(id, name)
    {
        const data = {gameId: getSetting(SETTINGS.GAME_ID),systemId: id, systemName: name};
        this.SendData("POST", "http://localhost:8000/api/system", data);
    }

    static PostToServer(data)
    {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:8000/api/actor', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + getSetting(SETTINGS.ACCESS_KEY))
        xhr.send(data);
    }

    static SendData(method, url, data)
    {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + getSetting(SETTINGS.ACCESS_KEY))
        xhr.send(JSON.stringify(data));
    }
}