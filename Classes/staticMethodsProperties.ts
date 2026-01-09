// Instructions:

// Create a class User.

// Add a static property called userCount (number), initialized to 0.

// The Constructor: Every time a new User is created (constructor runs), increment User.userCount by 1.

// Add a static method called getCount() that returns the count.

// Test: Create 2 users (new User()), then console log User.getCount().

class User{
    static userCount: number = 0
    constructor(){
        User.userCount += 1
    }
    static getCount(){
        return User.userCount
    }
}

const [user1, user2] = [new User(), new User()]

console.log(User.getCount())