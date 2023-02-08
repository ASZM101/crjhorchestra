/* eslint-disable no-unused-vars */
function compactNav() {
    let element = document.getElementById("topNav");
    if (element === null) return;
    if (element.className === "homeNav") {
        element.className += " responsive";
    } else {
        element.className = "homeNav";
    }
}
/* eslint-enable no-unused-vars */