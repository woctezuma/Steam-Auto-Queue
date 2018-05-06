// ==UserScript==
// @name         Steam Auto Queue
// @namespace    https://github.com/woctezuma/Steam-Auto-Queue/
// @version      1.0.1 forked
// @description  This script will automatically click through your discovery queue so you can get a sale card.
// @author       Wok
// @match        *://store.steampowered.com/app/*
// @match        *://store.steampowered.com/agecheck/app/*
// @updateURL    https://raw.githubusercontent.com/woctezuma/Steam-Auto-Queue/timer/steam-auto-queue.user.js
// @downloadURL  https://raw.githubusercontent.com/woctezuma/Steam-Auto-Queue/timer/steam-auto-queue.user.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
(function() {
    'use strict';

    console.log('Steam Auto Queue Loaded - Will try to click Next automatically...');
    
	try {
        if (window.location.pathname.indexOf('/agecheck') > -1) {
            var appid = window.location.pathname.replace('/agecheck', '').replace('/app/', '');
            HideAgeGate(appid);
        } else {
          setTimeout(function() {
            //Code to run After timeout elapses
            $J('#next_in_queue_form').submit();
            }, 2000);
        }
	}
	catch(err) {
		console.log('Error clicking next.');
	}
})();
