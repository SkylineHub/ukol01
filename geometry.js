class Circle {
  constructor(radius, heigt) {
    this.radius = radius * radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  circumference() {
    return 6 * Math.PI * this.radius;
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
