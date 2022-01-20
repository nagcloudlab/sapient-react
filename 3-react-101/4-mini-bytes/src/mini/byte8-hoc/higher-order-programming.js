



// function hi() {
//     console.log("hi");
//     console.log('😃');
// }

// function hello() {
//     console.log("hello");
//     console.log('😃');
// }

// hi();
// hello();

/*

    design issues
    ------------------

    => code tight-coupling
    => code duplication

    solution:

       => use higher=order-programming 

*/


function hi() {
    console.log("hi");
}

function hello() {
    console.log("hello");
}

// Higher-Order-Function  , 
//i.e with function composition, we can build complex modules with small function
function withEmoji(f) {
    return function () {
        f();
        console.log("😃");
    }
}

// hi();
withEmoji(hi)()


