// ==UserScript==
// @name         RobinTracker
// @namespace    http://somesite.com
// @version      0.1
// @description  Gathers cool robin stats!
// @author       /u/wave100
// @match        https://www.reddit.com/robin/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function () {
        var roomid;
        var roomname = $('.robin-chat--room-name').text();
        // alert(roomname);
        $.get('http://wave100.no-ip.org:8084/RobinTracker/CreateRoom?name=' + roomname , function(data, status){
            roomid = data;
            if (roomid != -1) {
                var names = document.getElementsByClassName("robin--username");

                for (var i = 0; i < names.length; i++) {
                    $.get('http://wave100.no-ip.org:8084/RobinTracker/AddUser?username=' + names[i].textContent + '&roomid=' + roomid , function(data, status){

                    });
                }

                $.get('http://wave100.no-ip.org:8084/RobinTracker/Finalize?roomid=' + roomid , function(data, status){

                });

            }

        });
    };

})();

