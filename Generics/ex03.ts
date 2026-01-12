// The Test
// Let's test if you can handle multiple variables.

// The Challenge: Write a generic function called createEntry.

// It accepts two arguments: key and value.

// The key should be of generic type K.

// The value should be of generic type V.

// It returns an array containing both: [key, value].

// Crucial: The return type must explicitly be a Tuple: [K, V]. 
// (Remember, (K | V)[] is a mixed list, [K, V] is a fixed pair).

function createEntry<K, V> (key: K, value: V): [K, V]{
    return [key, value]
}