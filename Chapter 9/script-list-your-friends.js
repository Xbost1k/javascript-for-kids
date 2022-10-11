$("h1").text("Мои друзья");

var nameFriends = [
    "Георгий",
    "Сергей",
    "Андрей"
];

for (var i = 0; i < nameFriends.length; i++) {
    $("body").append("<p>" + nameFriends[i] + "</p>");
    $("p").last().hide().fadeIn((i + 1) * 1000);
}

$("p").append(" лучший!");