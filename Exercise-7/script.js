function setupCounter() {
    let count = 0;
    
    return function incrementAndPrint() {
        count++;
        console.log(`Count: ${count}`);
    }
}

const myCounter = setupCounter();
myCounter(); // Output: Count: 1
myCounter(); // Output: Count: 2
myCounter(); // Output: Count: 3