// "Type-Safe Repository Pattern"
// Scenario: You are building a database wrapper. You need a generic Repository class that can manage any data model (Users, Products, etc.), as long as that model has an id. You also need a standardized way to handle the results of your queries (Success or Error).

// 📝 Requirements
// 1. The Core Interfaces

// Create an interface Entity that forces an object to have an id: number.

// Create a discriminated union type called Result<T>. It should have two shapes:

// Success: { status: "success", data: T }

// Failure: { status: "error", errorMsg: string }

// 2. The Generic Class (Repository)

// Create a class Repository<T> where T must extend Entity.

// It should have a private property storage (an array of T).

// Method add(item: T): Adds the item to the array.

// Method getById(id: number): Returns a Result<T>.

// If found: Return the Success shape with the item.

// If missing: Return the Failure shape with "Item not found".

// Method updateField:

// Arguments: id (number), field (key of T), value (type of that field).

// Logic: Find the item. If it exists, update that specific property. Return boolean (true if updated, false if not found).

// 3. The Guard Function

// Write a function isSuccess<T> that takes a Result<T> and returns a Type Predicate (res is ...).

// It returns true if the status is "success".

// 4. Execution (The Proof)

// Define a User interface (id, username, isAdmin).

// Instantiate a Repository for Users.

// Add a user: { id: 1, username: "admin", isAdmin: true }.

// Update that user's username to "SuperAdmin" using your type-safe updateField method.

// Get the user by ID.

// Use your isSuccess guard to check the result. If true, print the data.username.

// Good luck.

interface Entity {
    id: number
}

interface Success<T> {
    status: "success"
    data: T
}
interface Error {
    status: "error"
    errorMsg: string
}
type Result<T> = Success<T> | Error

class Repository<T extends Entity> {
    private storage: T[]= []

    public add(item: T) {
        this.storage.push(item)
    }

    public getById(id: number):Result<T> {
        const item = this.storage.find(obj => obj.id === id)
        return item ?
                { status: "success", data: item } :
                { status: "error", errorMsg: 'Item not found' }
    }

    public updateField<K extends keyof T>(id: number, field: K, value: T[K]): boolean {
        const item = this.storage.find(obj => obj.id === id)
        if(item){
            item[field] = value
            return true
        }
        return false
    }

}

function isSuccess<T> (res: Result<T>): res is Success<T> {
    return res.status === "success"
}

interface User {
    id: number
    username: string
    isAdmin: boolean
}

const Users: Repository<User> = new Repository()

Users.add({ id: 1, username: "admin", isAdmin: true }) //Adding a User

Users.updateField(1, 'username', 'SuperAdmin') //Updating a User

const user: Result<User> = Users.getById(1)

isSuccess<User>(user) ? console.log(user.data.username) : console.log(user.errorMsg)



