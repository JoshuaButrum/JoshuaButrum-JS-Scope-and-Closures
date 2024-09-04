function functionFactory(param) {
  return function() {
    console.log(`The value of param is: ${param}`);
  }
}

// Usage:
const printFive = functionFactory(5);
const printTen = functionFactory(10);

console.log(printFive()); // Output: The value of param is: 5
console.log(printTen()); // Output: The value of param is: 10