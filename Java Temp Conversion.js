// Current temperature in kelvin.
const kelvin = 0;
// Converting kevin to Celsius.
const celsius = kelvin - 273;
// Convert celsius to fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
// Rounding down the variable.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Now converting to newton.
let newton = celsius * (33 / 100);
// Rounding down the variable.
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
