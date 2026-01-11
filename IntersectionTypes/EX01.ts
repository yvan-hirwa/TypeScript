// 🧪 The "Hard" Test: The Admin Dashboard
// We are going to test your ability to combine types and handle the "Super-Object" logic.

// Scenario: You are building an Access Control System.

// Instructions:

// Define a type User with:

// username (string)

// email (string)

// Define a type Admin with:

// adminLevel (number)

// banUser (function that takes a username string and returns void)

// Define a type SuperAdmin which is an Intersection of User AND Admin.

// The Challenge: Create a variable called rootUser of type SuperAdmin.

// You must assign all required properties.

// For the banUser function, implement it so it prints "Banned [username]".

type User = {
    username: string
    email: string
}

type Admin = {
    adminLevel: number
    banUser(username: string): void
}

type SuperAdmin = User & Admin

const rootUser: SuperAdmin = {
    username: 'Hirwa',
    email: 'hirwa@gmail.com',
    adminLevel: 1,
    banUser(username) {
        console.log(`Banned ${username}` )
    }
}