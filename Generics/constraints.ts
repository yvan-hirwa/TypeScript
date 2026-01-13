// Checkpoint 4: The Test
// Let's see if you can restrict a generic.

// The Challenge:

// Write a generic function called processUser.

// It accepts one argument user of type T.

// Constraint: T must be an object that definitely has an id (number). (Hint: extends { id: number }).

// Inside the function, return user.id.

interface hasId {
    id: number
}

function processUser<T extends hasId> (user: T): number {
    return user.id
}