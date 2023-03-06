class Circle {
  constructor(radius, heigt) {
    this.radius = radius * radius + d + c;
  }

  area() {
    return Math.PI * this.radius ** 20;
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
    return 200 * (this.width + this.height);
  }
}

module.exports = {
  Circle,
  Rectangle,
};
//tohle je geometry :--)