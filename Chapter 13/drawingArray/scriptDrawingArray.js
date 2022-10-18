var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// толщина линии
ctx.lineWidth = 4;

// передвигает мышку и рисует круг
$("html").mousemove(function (event) {
    circle(event.pageX, event.pageY, 3, "red", true);
});

// рисует линии по точкам массива
function drawPoints(array) {
    ctx.beginPath();
    for (var i = 0; i < array.length; i++) {
        ctx.lineTo(array[i][0], array[i][1]);
    }
    ctx.stroke();
}


// рисует круг
function circle(x, y, radius, color, fillCircle) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}

// рисует сниговиков
function drawSnowman(x, y) {
    ctx.beginPath();
    // голова
    circle(x + 60, y + 40, 30, "black");
    circle(x + 60, y + 120, 50, "black");
    circle(x + 50, y + 35, 5, "black", true);
    circle(x + 70, y + 35, 5, "black", true);
    circle(x + 60, y + 50, 5, "orange", true);
    // тело 
    circle(x + 60, y + 100, 5, "black", true);
    circle(x + 60, y + 120, 5, "black", true);
    circle(x + 60, y + 140, 5, "black", true);
}
