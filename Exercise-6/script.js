function hoistingTest() {
    console.log(x); // This will throw a reference error because x is not defined when the variable is printed

    let x = 10;
}

hoistingTest();