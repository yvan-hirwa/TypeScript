// Challenge: The "Mystery Box"
// I want you to write a function that safely handles a "mystery input".

// Create a function called printLength.

// It takes one argument: input (type unknown).

// Inside the function:

// If the input is a string, log its length.

// If the input is an array, log the number of items (length).

// If it is anything else, log "Cannot measure length".

// (Hint: You will need typeof for the string, and Array.isArray() for the array).

function printLength(input: unknown): void{
    if(typeof input === 'string' || Array.isArray(input)) console.log(input.length)
    else console.log('Cannot measure length')
}

// console.log(printLength('hello'))   //TEST