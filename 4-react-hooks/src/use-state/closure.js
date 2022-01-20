


function func() {
    let i = 12
    function nestedFunc() {
        console.log(i);
    }
    return nestedFunc;
}

let nf = func();
nf();