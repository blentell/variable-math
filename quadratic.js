const a = 2;
const c = 4;
const b = 32;

const x1 = (-b + (Math.sqrt(b ** 2 - 4 * a * c ))) / (2 * a);
const x2 = (-b - (Math.sqrt(b ** 2 - 4 * a * c ))) / (2 * a);

console.log("The quadratic formula for x1 is", x1);
console.log("The quadratic formula for x2 is", x2);