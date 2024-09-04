let h = 0;

function modifyGlobal() {
    h = 10;
}

function localScopeTest() {
    let h = 0;
}

modifyGlobal();
localScopeTest();