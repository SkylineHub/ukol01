const { add, subtract, multiply, divide } = require("./math.js");
const { Circle, Rectangle } = require("./geometry.js");

console.log(add(2, 3)); // 5
console.log(subtract(6, 4)); // 2
console.log(multiply(5, 8)); // 40
console.log(divide(15, 3)); // 5

const circle = new Circle(5);
console.log(`Circle with radius ${circle.radius} has area of ${circle.area()} and circumference of ${circle.circumference()}`);

const rectangle = new Rectangle(3, 6);
console.log(`Rectangle with width ${rectangle.width} and height ${rectangle.height} has area of ${rectangle.area()} and perimeter of ${rectangle.perimeter()}`);