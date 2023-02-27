/* eslint-disable @typescript-eslint/no-unused-vars */
function compactNavLogic(element: HTMLElement) {
    if (element.className === "nav") {
        element.className += " responsive";
    }
    else {
        element.className = "nav";
    }
}
function compactNav() {
    const element = document.getElementById("topNav") as HTMLElement;
    compactNavLogic(element);
}

function compactNav2() {
    const element = document.getElementById("topNav2") as HTMLElement;
    compactNavLogic(element);
}

function compactNav3() {
    const element = document.getElementById("topNav3") as HTMLElement;
    compactNavLogic(element);
}

function compactNav4() {
    const element = document.getElementById("topNav4") as HTMLElement;
    compactNavLogic(element);
}

function compactNav5() {
    const element = document.getElementById("topNav5") as HTMLElement;
    compactNavLogic(element);
}

function compactNav6() {
    const element = document.getElementById("topNav6") as HTMLElement;
    compactNavLogic(element);
}

function compactNav7() {
    const element = document.getElementById("topNav7") as HTMLElement;
    compactNavLogic(element);
}

/* eslint-enable @typescript-eslint/no-unused-vars
 */