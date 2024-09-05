function createCounter(maxValue = 10) {
    let counter = 0;

    return function incrementCounter() {
        counter = (counter + 1) % (maxValue + 1);
        console.log(counter);
    };
}

// The createCounter function initializes a counter variable counter to 0. It then returns another function, incrementCounter, which has access to the counter variable through closure. When incrementCounter is invoked, it increments the counter variable and prints its value. If the counter reaches the maxValue (default is 10), it resets to 0 using the modulo operator (%).