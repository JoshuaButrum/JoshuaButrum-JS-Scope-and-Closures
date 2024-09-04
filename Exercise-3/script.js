function outerFunction() {
    function innerFunction() {
        console.log('I am an inner function');
        return 'Nice to meet you, outer function';
    }
    return innerFunction();
}

function invokingOuterFunction() {
    console.log(outerFunction());
}

invokingOuterFunction();