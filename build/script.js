"use strict";
function compactNav() {
    var element = document.getElementById("topNav");
    if (element.className === "homeNav") {
        element.className += " responsive";
    }
    else {
        element.className = "homeNav";
    }
}
