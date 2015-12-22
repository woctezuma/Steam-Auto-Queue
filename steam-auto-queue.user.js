// ==UserScript==
// @name         Steam Auto Queue
// @namespace    https://github.com/FiveElementNinja/Steam-Auto-Queue/
// @version      0.21
// @description  This script will automatically click next on all the games in your queue so you can clear it out and get your card.
// @author       Five Element Ninja (Twitter: @FivElementNinja)
// @match        *://store.steampowered.com/app/*
// @updateURL    https://raw.githubusercontent.com/FiveElementNinja/Steam-Auto-Queue/master/steam-auto-queue.user.js
// @downloadURL  https://raw.githubusercontent.com/FiveElementNinja/Steam-Auto-Queue/master/steam-auto-queue.user.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

console.log('Steam Auto Queue Loaded - Will try to click Next automatically...');
try {
	$J('#next_in_queue_form').submit();
}
catch(err) {
	console.log('Error clicking next.');
}