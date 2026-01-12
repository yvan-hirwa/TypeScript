// Instructions:

// Define the Shape:

// Create an interface UserProfile with:

// id: number

// username: string

// email: string (optional ?)

// The "Messy" Data:

// Create a variable rawData of type any.

// Assign this object to it: { id: 101, username: "admin", email: "admin@test.com" }.

// Task A (The as Cast):

// Create a new variable safeProfile of type UserProfile.

// Assign rawData to it.

// Use the as keyword to force TypeScript to accept the transfer.

// Task B (The ! Hazard):

// Write a function sendEmail(email: string).

// Call this function passing safeProfile.email.

// Crucial: Since email is defined as optional in the interface, TypeScript will normally complain ("Type undefined is not assignable to string").

// Use the ! operator to silence this error and force the call.

interface UserProfile {
    id: number
    username: string
    email?: string
}
const rawData: any ={ id: 101, username: "admin", email: "admin@test.com" }
const safeProfile: UserProfile = rawData as UserProfile

function sendEmail(email: string){}

sendEmail(safeProfile.email !)
