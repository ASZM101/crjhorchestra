function compactNav() {
    let element = document.getElementById("topNav") as HTMLElement;
    if (element.className === "homeNav") {
        element.className += " responsive";
    } else {
        element.className = "homeNav";
    }
}