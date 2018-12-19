// windowSize, initCanvas

function windowSize() {
    var elmnt = document.body;
    var y = elmnt.scrollHeight;
    var x = elmnt.scrollWidth;
	document.getElementsByTagName("canvas")[0].setAttribute("height", y);
	document.getElementsByTagName("canvas")[0].setAttribute("width", x);
}

var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 2;

function initCanvas() {
    canvas = document.getElementById('can');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;

}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    var m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("can").style.display = "none";
    }
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.pageX - canvas.offsetLeft;
        currY = e.pageY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.pageX - canvas.offsetLeft;
            currY = e.pageY - canvas.offsetTop;
            draw();
        }
    }
}

function showCanvas(el) {
    el.style.display = "flex";
    document.body.style.cursor =  "url('/assets/img/pen.svg'), auto";
}

function hideCanvas(el) {
    var saveBtn = document.getElementById("canvas-save-btn");
    if (saveBtn) {
        el.removeChild(saveBtn);
    }
    el.style.display = "none";
    document.body.style.cursor =  "auto";
}

function toggleCanvas() {
    if (canvasElement.style.display === "none") {
        showCanvas(canvasElement);
    } else {
        hideCanvas(canvasElement);
    }
}

function replaceBtnImg() {
    var canvasBtnImg = document.getElementById("canvas-button__img");
    if (canvasBtnImg.classList.contains('open')) {
        canvasBtn.innerHTML = '<svg id="canvas-button__img" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M11.8 29.1h-.3c-.4-.2-.6-.4-.6-.9l1-6.3c0-.4.1-.6.4-.9l9.9-9.8c.4-.4.8-.4 1.2 0l5.4 5.4.4.6v.3c-.1.1-.1.3-.3.4L18.9 28c-.1.1-.3.2-.5.2l-.6.1-4.7.7-1.3.1zm9.8-13.4l-.9-.9-6.8 6.9.9.9 6.8-6.9zm2.8 2.9l-6.9 6.8.9.9 6.9-6.8-.9-.9zm-7.9 5.7l6.9-6.8-.7-.7-6.9 6.8.7.7zm6.3-11.6l-1 1 4.6 4.7 1-1.1-4.6-4.6zm-5.7 14.2L13.2 23v.1l-.3 2.4.1.2 1.5 1.5.2.1 1.6-.3.8-.1z" fill="#fff"/><path fill="none" stroke="#fff" stroke-width="2" stroke-miterlimit="10" d="M10.9 11l18.2 18.1"/></svg>';
    } else {
        canvasBtn.innerHTML = '<svg id="canvas-button__img" class="open" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080"><path d="M319 787h-8c-12-5-17-12-15-23l26-171c1-10 4-17 11-24l266-265c11-11 21-11 32 0l145 145 11 15v8c-2 4-4 8-7 10L509 754c-4 4-8 6-14 6l-15 3-126 18-35 6zm264-363l-25-25-184 185 25 24 184-184zm77 77L475 685l24 24 185-184-24-24zM446 656l185-184-20-20-185 184 20 20zm169-313l-28 28 125 126 28-29-125-125zM461 727L356 622l-1 3-9 64 2 5 41 41 6 2 43-7 23-3z" fill="#fff"/></svg>';
    }
}

var pickUp = document.getElementById('pick-up'),
    pickUpState;

function getPickUpState() {
    if (!sessionStorage.pickUp) {
        console.log('pickup is not set');
        pickUp.classList.add('visible');
    }
}

function setPickUpState() {
    pickUp.classList.remove('visible');
    sessionStorage.setItem("pickUp", true);
}
function closeGeneratedCanvas() {
    var generatedCanvas = document.getElementById('canvas-generated');
    var closeGeneratedCanvasBtn = document.getElementById('canvas-close-btn');
    document.body.removeChild(generatedCanvas);
    document.body.removeChild(closeGeneratedCanvasBtn);
}

function drawCloseGeneratedCanvasBtn() {
    var closeBtn = document.createElement("button");
    var closeBtnTxt = document.createTextNode("X");
    closeBtn.appendChild(closeBtnTxt);
    closeBtn.classList.add('button');
    closeBtn.id = "canvas-close-btn";
    document.body.appendChild(closeBtn);
    closeBtn.addEventListener('click', closeGeneratedCanvas);
}

function takeScreenshot() {
    var saveBtn = document.getElementById("canvas-save-btn");
    canvasElement.removeChild(saveBtn);
    var w = window.innerWidth;
    var h = document.body.clientHeight;

    html2canvas(document.body,{width:w, height:h}).then(function(canvas) {
        canvas.id = "canvas-generated";
        document.body.appendChild(canvas);
        hideCanvas(canvasElement);
        replaceBtnImg();
        drawCloseGeneratedCanvasBtn();
    });
}

function toggleSaveBtn() {
    if (canvasElement.style.display != "none") {
        var saveBtn = document.createElement("button");
        var saveBtnTxt = document.createTextNode("Save");
        saveBtn.appendChild(saveBtnTxt);
        saveBtn.classList.add('button');
        saveBtn.id = "canvas-save-btn";
        canvasElement.appendChild(saveBtn);
        saveBtn.addEventListener('click', takeScreenshot);
    } else {
        var saveBtn = document.getElementById("canvas-save-btn");
        canvasElement.removeChild(saveBtn);
    }
}

function drawCanvas() {
    windowSize();
    initCanvas();
    toggleCanvas();
    replaceBtnImg();
    setPickUpState(); 
    if (document.body.classList.contains('playground')) {
        toggleSaveBtn();  
    }
}

getPickUpState();

var canvasElement = document.getElementById("canvas-container");
var canvasBtn = document.getElementById("canvas-button");
canvasBtn.addEventListener('click', drawCanvas);
