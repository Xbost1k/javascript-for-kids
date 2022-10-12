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
var setIntervalId = setInterval(moveHeader, 10);

$("h1").click(function() {
    clearInterval(setIntervalId);
});