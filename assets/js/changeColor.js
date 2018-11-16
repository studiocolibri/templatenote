var currentColor;

function writeColor(color) {
    document.documentElement.style.setProperty("--templateColor", color);
}

function setColor() {
    currentColor = document.getElementById("changeColor").value;
    
    if (typeof(Storage) !== "undefined") {
        sessionStorage.setItem("color", currentColor);
    }
    
    writeColor(currentColor);
}

function getColor() {

    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.color) {
            currentColor = sessionStorage.getItem("color");
        } else {
            currentColor = document.getElementById("changeColor").value;
            sessionStorage.setItem("color", currentColor);
        }
    } else {
        currentColor = document.getElementById("changeColor").value;
    }

    writeColor(currentColor);
}

getColor();