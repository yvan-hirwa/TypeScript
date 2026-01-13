// 🛑 The Test: The Smart Updater
// This is a very common pattern in React and State Management.

// The Challenge:

// Write a generic function called updateProperty.

// Arguments:

// obj: The object (Type T).

// key: The property name (Type K, which must be a key of T).

// value: The new value. Crucial: The value must match the type of that specific key! (Hint: You can use T[K] to get the value's type).

// Return value: void (it modifies the object).

function updateProperty<T, K extends keyof T> (obj: T, key: K, value: T[K]): void {
        obj[key] = value
}