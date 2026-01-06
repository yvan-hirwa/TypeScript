// Instructions:

// Define a Type Alias called TextModifier. It represents a function that accepts 
// a string and returns a string.

// Write a function called applyEffect.

// It takes two arguments: text (string) and modifier (of type TextModifier).

// It should return the result of running the modifier on the text.

// Call applyEffect passing the word "typescript" and a callback function that converts the string to uppercase.

// Log the result.

type TextModifier = (a: string) => string

function applyEffect(text: string, modifier: TextModifier): string{
    return modifier(text)
}

// function mod(text :string): string{
//     return text.toUpperCase()
// }

applyEffect('typescript', (text) => text.toUpperCase())