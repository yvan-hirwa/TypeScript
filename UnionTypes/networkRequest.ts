// Challenge: The "Network State"
// This is a classic interview question.

// Define a Discriminated Union type called NetworkResponse.

// Loading: Has state: "loading".

// Success: Has state: "success" and a payload (string).

// Failed: Has state: "failed" and a code (number).

// Write a function handleResponse that takes a NetworkResponse.

// If loading, log "Wait...".

// If success, log the payload.

// If failed, log "Error: " followed by the code.

// Show me your solution!

type Loading = {
    state: 'loading'
}
type Success = {
    state: 'success'
    payload: string
}
type Failed = {
    state: 'failed'
    code: number
}

type NetworkResponse = Loading | Success | Failed

function handleResponse (response: NetworkResponse) : void {
    switch(response.state){
        case 'loading':
            console.log('Wait...')
            break
        case 'success':
            console.log(response.payload)
            break
        case 'failed':
            console.log(`Error: ${response.code}`)
            break
        default:
            const _check: never = response
            console.log(_check)
    }
}
