class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle {
  constructor(width, heigt) {
    this.width = width;
    this.height = heigt;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

module.exports = {
  Circle,
  Rectangle,
};
//tohle je geometry :--)