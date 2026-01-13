// Instructions:

// Define the Class:

// Create a class Playlist<T>.

// It should have a private property queue which is an array of T.

// Add Methods:

// add(item: T): Adds an item to the queue.

// playNext(): Removes and returns the first item in the queue. (Hint: Array .shift()).

// The "Constraint" Twist (The Challenge):

// We don't want people adding numbers to a playlist. That makes no sense.

// Modify the generic definition <T> so that T must extend an object with a title: string property.

// Execution:

// Create an interface Song with title and artist.

// Create a myPlaylist instance for Song.

// Add a song and "play" it.

class Playlist<T extends {title: string}> {
    private queue: T[] = []

    public add(item: T): void {
        this.queue.push(item)
    }
    public playNext(): T {
        return this.queue.shift()! // Might need to check the length
    }
}
//Execution

interface Song {
    title: string
    artist: string
}

const myPlaylist: Playlist<Song> = new Playlist()

myPlaylist.add({
    title: 'soso',
    artist: 'omah Lay'
})

myPlaylist.playNext()