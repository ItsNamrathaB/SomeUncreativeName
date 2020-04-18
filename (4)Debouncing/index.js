let counter = 0;
const getData = () => {
    console.log("blahh..! ",counter++)
}

const debounce = function (fn, delay) {
    let timer;
    return function() {
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