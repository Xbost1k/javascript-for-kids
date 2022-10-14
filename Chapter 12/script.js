function Car(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.drawCar();
}

Car.prototype.drawCar = function () {
    var carHtml = '<img src="car.webp">';
    
    this.carElement = $(carHtml);

    this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });

    $("body").append(this.carElement);
    return this.x;
};

Car.prototype.moveRight = function (speed) {
    if (speed > 0) {
        this.x += speed;
    } else {
        this.x += this.speed;
    }
    

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveLeft = function (speed) {
    this.x -= this.speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveDown = function (speed) {
    this.y += this.speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};
Car.prototype.moveUp = function (speed) {
    this.y -= this.speed;

    this.carElement.css({
        left: this.x,
        top: this.y
    });
};

var tesla = new Car(20, 20);
var nissan = new Car(100, 200);

setInterval(function () {
    tesla.moveRight(Math.floor(Math.random() * 5));
    nissan.moveRight(Math.floor(Math.random() * 5));
}, 30);