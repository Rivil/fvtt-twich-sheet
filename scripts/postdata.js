/* globals


 */

"use strict";

import {getSetting, SETTINGS} from "./settings.js";

export class Postdata
{
    static PostToServer(data)
    {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:8000/api/actor', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + getSetting(SETTINGS.ACCESS_KEY))
        xhr.send(data);
    }
}