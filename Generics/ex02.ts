// The Challenge: Write a generic function called makePair.

// It should accept two arguments:

// v1 of type T.

// v2 of type T.

// (Note: Both arguments must be the same type!)

// It should return an Array containing those two items.

// The return type should be T[].

function makePair <T> (v1: T, v2: T): T[]{
    return [v1, v2]
}