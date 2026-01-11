// Scenario: You are building a generic media player that handles Songs and Movies.

// Instructions:

// Define a class Song with a method playAudio().

// Define a class Movie with a method playVideo().

// Define a function playMedia(media: Song | Movie).

// The Constraint: Inside the function, you must use a Type Guard to call the correct method.

// Try using instanceof.

// Part 2 (The Twist): Now imagine these are Interfaces, not Classes (so instanceof breaks).

// Change them to interface Song { audio: string } and interface Movie { video: string }.

// Rewrite the function using the in operator to check for the property.

class Song {
    playAudio(){}

}
class Movie {
    
    playVideo(){}
}
function playMedia(media: Song | Movie): void{
    if(media instanceof Song) console.log('song')
    else console.log('Movie')
}

///////////////////////////////////////////////////////////

interface Song{
    audio: string
}
interface Movie {
    video: string
}

/////////In

function InGuard(media: Song | Movie): void{
    if('audio' in media) 
        console.log('Song')
    else console.log('Movie')
}

////////Is 

function isSong(media: Song | Movie): media is Song{
    return (media as Song).audio !== undefined
} 