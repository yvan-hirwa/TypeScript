// Requirements:

// Create a class called Ballot.

// The Constructor: Use the shorthand syntax to define:

// voterId (string): This must be Readonly (a voter ID cannot change).

// candidate (string): This must be Private (no one can see who you voted for directly).

// The Logic:

// The candidate generally shouldn't be changeable, BUT inside the class, we want to allow changing the vote only if the candidate 
// is "None".

// Create a method castVote(newCandidate: string).

// Logic: If the current candidate is "None", update it to the newCandidate. If it is not "None", console log 
// "Error: Vote already cast for [candidate]".

// The Leak: Create a method getReceipt() that returns a string: "Voter [voterId] has voted." (Do not reveal the candidate).

// Goal: Write the class and instantiate it with ID "V-101" and candidate "None". Then try to vote for "Neo". 
// Then try to vote for "Morpheus".

class Ballot{
    constructor(public readonly voterId:string, private candidate: string){}

    castVote(newCandidate: string): void{
        if(this.candidate === 'None')this.candidate = newCandidate
        else console.log( `Error: vote already cast for ${this.candidate}` )
    }
    getReceipt(): string{
        return `Voter ${this.voterId} voted`
    }
}

const voter: Ballot = new Ballot("V-101", "None")
voter.castVote('Neo')
voter.castVote('Morpheus')



//simple fix

// class Vault {
//     readonly secretCode: number; // FIX ME
//     private cash: number;       // FIX ME
//     public isOpen: boolean;    // FIX ME

//     constructor(code: number) {
//         this.secretCode = code;
//         this.cash = 0;
//         this.isOpen = false;
//     }
// }