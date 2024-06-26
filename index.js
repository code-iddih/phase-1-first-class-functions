//The receivesAFunction
function receivesAFunction(cb) {

    // Define num1 and num2
    const num1 = 30;
    const num2 = 40;

    // Call the callback function with num1 and num2
    return cb(num1, num2);
}

// The returnsANamedFunction

function returnsANamedFunction() {

    function namedFunction() {
    
        console.log("Inside the named function");
    }

    return namedFunction; // Return the named function
}

// The returnsAnAnonymousFunction

function returnsAnAnonymousFunction() {
    
    return function() {

        console.log("Inside the anonymous function");
    };
}