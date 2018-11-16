var currentColor,
    changeColorBtn = document.getElementById('change-color-btn'),
    changeColorBtnCurrent = document.getElementById('change-color-btn__current'),
    colorList = document.getElementById('change-color-list'),
    allColorBtns = document.querySelectorAll('.change-color-list__item');

if (typeof(Storage) == "undefined") {
    changeColorBtn.style.display = none;
}

function setBtnColors() {
    allColorBtns.forEach(function(el) {
        var thisBtnColor = el.dataset.color;
        el.style.backgroundColor = thisBtnColor;
        el.addEventListener('click', function() {
            setColor(thisBtnColor);
        });
    });
}

function writeColor(color) {
    document.documentElement.style.setProperty("--templateColor", color);
    changeColorBtn.style.backgroundColor = color;
    changeColorBtnCurrent.style.backgroundColor = color;
}

function setColor(color) {
    if (color) {
        currentColor = color;
        sessionStorage.setItem("color", currentColor);
    } else {
        currentColor = sessionStorage.getItem("color");
    }
    writeColor(currentColor);
}

function getColor() {
    setBtnColors();

    if (sessionStorage.color) {
        currentColor = sessionStorage.getItem("color");
    } else {
        currentColor = document.getElementById("change-color-btn__current").dataset.color;
        sessionStorage.setItem("color", currentColor);
    }

    writeColor(currentColor);
}

function showColorList() {
    if (colorList.style.display === "none") {
        colorList.style.display = "flex";
        changeColorBtn.classList.add('opened');
        setColor();
    } else {
        colorList.style.display = "none";
        changeColorBtn.classList.remove('opened');
    }
}

changeColorBtn.addEventListener('click', showColorList);

getColor();