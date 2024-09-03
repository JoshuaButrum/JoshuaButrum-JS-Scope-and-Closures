function mainFunction() {
    hoistedFunction();

    function hoistedFunction() {
        console.log('I am a hoisted function!');
        return 'I am a hoisted function!';
    }
}

mainFunction();