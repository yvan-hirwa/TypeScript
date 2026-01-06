// Back to the Challenge 🏋️
// Now that we have confirmed that, let's see if you can apply it.

// The Task:

// Function sendInvites.

// Arg 1: host (string).

// Arg 2: ...guests (string array).

// Return: "[Host] is inviting: [Guest1], [Guest2]..." (Use .join(", ")).

function sendInvites( host: string, ...guests: string[] ): string {
    return `${host} is inviting : ${guests.join(',')}`
}