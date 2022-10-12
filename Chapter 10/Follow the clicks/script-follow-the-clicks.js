$("html").click(function(event) {
    $("h1").offset({
        left: event.pageX,
        top: event.pageY
    });
});