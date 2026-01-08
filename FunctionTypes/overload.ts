// 🏋️ Practical Exercise: The "Magic" Doubler (Redux)
// Now that you know what a Signature is, let's build that function.

// Instructions:

// Write an Overload Signature for a string input/output.

// Write an Overload Signature for a number input/output.

// Write the Implementation Signature (using string | number or any).

// Note: This must be immediately below the overloads.

// Inside the body { ... }, write the logic to handle both cases.

function double(input: number): number
function double(input: string): string
function double(input: string|number): any{
    if(typeof input === 'number')return input*2
    else return input+input
}

const val = double(10)

console.log(val.toFixed(2))
