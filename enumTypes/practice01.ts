// Your Challenge: The "User Roles"
// Imagine you are building a permission system. You have three roles:

// Admin

// Editor

// Guest

// How would you define an Enum named UserRole for these three options? 
// (Don't worry about assigning values, just let TypeScript do the default numbering).

enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Guest = 'Guest'
}

console.log(UserRole.Admin); // Output: 0
console.log(UserRole.Editor); // Output: 1
console.log(UserRole.Guest);  // Output: 2