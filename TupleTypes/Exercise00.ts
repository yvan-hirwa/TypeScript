// This is a comprehensive challenge that tests Fixed Structure, Literal Types, Arrays of Tuples, and Readonly Immutability.

// Imagine you are building the logging system for a web server. You need to store server logs in a very specific 
// format to save memory, and you need a server configuration that can never be tampered with.

// Please write the TypeScript code for these 4 requirements:

// Define a Type: Create a Tuple type named LogEntry. It must have exactly three items in this order:

// Index 0: The timestamp (string).

// Index 1: The severity level (It can only be 'INFO' or 'ERROR').

// Index 2: The message (string).

// Create the List: Create a variable named systemLogs that is an Array of these LogEntry tuples. (Initialize it with one valid log entry).

// The Immutable Config: Create a variable named serverConfig that stores the IP address ("127.0.0.1") and Port (8080).

// It must be a Tuple.

// It must be impossible for a hacker (or a clumsy developer) to .push() a third item into it later.

// The "Why": In a comment at the bottom of your code, write the specific line of code that serverConfig prevents you from running.


type LogEntry = [
    string,
    'INFO'| 'ERROR',
    string
]
const systemLogs: LogEntry[] = [['12:00:00', 'ERROR', 'Hello World']]

const serverConfig: readonly [string, number] = ["127.0.0.1", 8080]

// serverConfig.push('Hello World') Can't run this since the tuple is readonly

