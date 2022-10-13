var width = 800;
var height = 800;
var clicks = 0;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function(event) {
    clicks++;
    
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    } else if (clicks === 10) {
        alert("Конец игры. Вы не нашли клад!");
        clicks = 0;
    }
});






function getRandomNumber(size) { return Math.floor(Math.random() * size); }

function getDistance(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

function getDistanceHint(distance) {
    if (distance < 10) {
        return "Обожжешься";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "горячо, у вас осталось попыток " + clicks;
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "холодно, у вас осталось попыток " + clicks;
    } else if (distance < 320) {
        return "Очень холодно";
    } else if (distance < 640) {
        return "Очень очень холодно";
    } else {
        return "Замерзнешь!";
    }
}
