// The Grandmaster Challenge 🥋
// You asked for a question that tests everything you have learned so far. This is it.

// Scenario: You are building the core inventory system for an RPG game. You need to handle different item types, strict coordinates, and parsing unknown data from a "save file."

// Requirements:

// The Types (Discriminated Union): Create a discriminated union type called Item. It should be a union of two types:

// Weapon: Has type: 'weapon', a name (string), and damage (number).

// Potion: Has type: 'potion', a name (string), and effect (string literal: either 'heal' or 'mana').

// The Location (Tuple): Define a type alias Coordinates that is strictly a Tuple of exactly two numbers [x, y].

// Add this location property to both the Weapon and Potion types defined above (you can modify step 1).

// The Parser (Unknown + Type Assertion): Write a function called parseLoot that takes one argument: input (type unknown).

// Use as to forcefully tell TypeScript that this input is an Item. (Assume the database is trusted for this specific exercise).

// Return the input cast as an Item.

// The Logic (Exhaustiveness): Write a function useItem that takes an Item.

// If it's a Weapon, log: "Equipped [Name] at [x,y] dealing [damage] dmg."

// If it's a Potion, log: "Drank [Name] for [effect]."

// Crucial: Include the default case with the never check to ensure future safety.

type Coordinates = readonly [x: number, y: number]
type Weapon = {
    type: 'weapon'
    name: string
    damage: number
    location: Coordinates
}
type Potion = {
    type: 'potion'
    name: string
    effect: 'heal' | 'mana'
    location: Coordinates
}

type Item = Weapon | Potion 

function parseLoot (input: unknown): Item {
    return input as Item
}

function useItem (item: Item): void{
    switch(item.type){
        case "weapon":
            console.log(`Equipped ${item.name} at ${[...item.location]} dealing ${item.damage} dmg.`)
            break
        case "potion":
            console.log(`Drank ${item.name} for ${item.effect}.`)
            break
        default:
            const _check: never = item
            console.log(_check)
    }
}