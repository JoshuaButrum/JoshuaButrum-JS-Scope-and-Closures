function outerFunction() {
    let outerVar = 'outerVar is a Global scope';

    function innerFunction() {
        let innerVar = 'innerVar is a Function scope';
        console.log(outerVar); // Can we access outerVar?
        console.log(innerVar); // Can we access innerVar?
    }

    innerFunction();
}

outerFunction();