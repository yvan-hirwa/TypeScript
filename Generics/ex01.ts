// The Challenge: Write a generic function called wrapper.

// It should accept one argument named value.

// It should use a generic type (call it Type or T).

// It should return an object that looks like this: { data: value }.

// The return type of the function should be { data: T }.

function wrapper<T> (value: T): {data: T} {
    return {data: value}
}