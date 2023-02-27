"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
function compactNavLogic(element) {
    if (element.className === "nav") {
        element.className += " responsive";
    }
    else {
        element.className = "nav";
    }
}
function compactNav() {
    var element = document.getElementById("topNav");
    compactNavLogic(element);
}
function compactNav2() {
    var element = document.getElementById("topNav2");
    compactNavLogic(element);
}
function compactNav3() {
    var element = document.getElementById("topNav3");
    compactNavLogic(element);
}
function compactNav4() {
    var element = document.getElementById("topNav4");
    compactNavLogic(element);
}
function compactNav5() {
    var element = document.getElementById("topNav5");
    compactNavLogic(element);
}
function compactNav6() {
    var element = document.getElementById("topNav6");
    compactNavLogic(element);
}
function compactNav7() {
    var element = document.getElementById("topNav7");
    compactNavLogic(element);
}
/* eslint-enable @typescript-eslint/no-unused-vars
 */ 
