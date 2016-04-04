// ==UserScript==
// @name         RobinTracker
// @namespace    http://somesite.com
// @version      0.3
// @description  Gathers cool robin stats!
// @author       /u/wave100
// @match        https://www.reddit.com/robin/
// @updateURL    https://github.com/wave100/RobinTracker/raw/master/track.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function () {
        var roomid;
        var roomname = $('.robin-chat--room-name').text();
        var username = document.getElementsByClassName("user")[0].children[0].text;

        // alert(roomname);

        //if (GM_getValue('firstrun', 0) === 0) {
        //    GM_setValue('firstrun', 1);
        //    alert('"Unsafe" scripts must be enabled in order for this plugin to function! This is because reddit uses HTTPS whereas my server only uses HTTP.');
        //}

        $.get('http://wave100.no-ip.org:8084/RobinTracker/RegisterClient?username=' + username + '&version=0.3', function(data, status){

        });

        $.get('http://wave100.no-ip.org:8084/RobinTracker/CreateRoom?name=' + roomname , function(data, status){
            roomid = data;
            if (roomid != -1) {
                var names = document.getElementsByClassName("robin--username");

                for (var i = 0; i < names.length; i++) {
                    $.get('http://wave100.no-ip.org:8084/RobinTracker/AddUser?username=' + names[i].textContent + '&roomid=' + roomid , function(data, status){
                    });
                }

                var overflowArray = document.getElementsByClassName("robin-user-list-overflow-indicator");
                if (overflowArray.length == 1) {
                    var overflowText = document.getElementsByClassName("robin-user-list-overflow-indicator")[0].innerText;
                    var overflow = overflowText.slice(4,test.length-5);

                    $.get('http://wave100.no-ip.org:8084/RobinTracker/AddOverflowCount?roomid=' + roomid + '&overflow=' + overflow, function(data, status){
                    });
                }

                $.get('http://wave100.no-ip.org:8084/RobinTracker/Finalize?roomid=' + roomid , function(data, status){
                });

            }

        });
    };

})();

