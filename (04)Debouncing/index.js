let counter = 0;
const getData = () => {
    console.log("blahh..! ",counter++)
}

const debounce = function (fn, delay) {
    let timer;
    return function() {
        // taking context and args from here because this reflects with the ones called at "runtime"
        // during the actual debounced function call
        // where as the outer context refers to the one from line #21
        let context = this,
        args = arguments;
        clearTimeout(timer) // to clear out, and start again, if key's pressed before the timeout. 
        timer = setTimeout(() => {
            fn.apply(context,args)
        }, delay)
    }
}

const optimisedFunction = debounce(getData, 500);

// P.S. : This is so beautiful❤
