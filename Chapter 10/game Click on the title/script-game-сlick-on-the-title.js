var offset = 0;
var direction = "вправо";

$("h1").offset({ left: offset, top: offset })

function moveHeader() {
    if (direction === "вправо") {
        $("h1").offset({ left: offset });
        offset++;
        if (offset > 200) {
            offset = 0;
            direction = "вниз";
        }
    } else if (direction === "вниз") {
        $("h1").offset({ top: offset });
        offset++;
        if (offset > 200) {
            offset = 200;
            direction = "влево";
        }
    } else if (direction === "влево") {
        $("h1").offset({ left: offset });
        offset--;
        if (offset < 0) {
            offset = 200;
            direction = "вверх";
        }
    } else if (direction === "вверх") {
        $("h1").offset({ top: offset });
        offset--;
        if (offset < 0) {
            offset = 0;
            direction = "вправо";
        }
    }
}
var clicks = 0;
var interval = 10;
var idInterval = setInterval(moveHeader, interval);

$("h1").click(function() {
    clearInterval(idInterval);
    clicks++;
    $("h1").text("Заголовок " + clicks);
    if (clicks < 10) {
        interval--;
        console.log(interval);
        idInterval = setInterval(moveHeader, interval);
    } else if (clicks === 10) {
        clearInterval(idInterval);
    }
});