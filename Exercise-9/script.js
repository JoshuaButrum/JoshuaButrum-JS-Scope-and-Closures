// Global variable
let globalVar = 10;

// Function that modifies a global variable
function modifyGlobal() {
  globalVar += 10;
  console.log(globalVar);
}

// Function that tries to modify a local variable (not yet declared)
function modifyLocal() {
  localVar += 10; // ReferenceError: localVar is not defined
  let localVar = 20; // Declaration and initialization after reference
}

// Modify the first function to become a factory function returning another function
function outerFunction() {
  let outerVar = 30;

  return function innerFunction() {
    outerVar += 10;
    console.log(outerVar);
  };
}

// Example usage
modifyGlobal(); // prints 20
try {
  modifyLocal(); // throws ReferenceError
} catch (error) {
  console.error(error);
}

const innerFunc = outerFunction();
innerFunc(); // prints 40
innerFunc(); // prints 50