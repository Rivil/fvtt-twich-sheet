/* globals


 */

"use strict";

export class Postdata
{
    static PostToServer(data)
    {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:8001/api/SheetObjects', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(data);
    }
}