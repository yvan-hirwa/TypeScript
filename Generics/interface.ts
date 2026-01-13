// Scenario: You are building the frontend types for a blog site. You need to handle responses for 
// fetching a User Profile and fetching a List of Blog Posts.

// Instructions:

// Define Data Models:

// Interface UserProfile: properties username (string), isActive (boolean).

// Interface BlogPost: properties title (string), likes (number).

// Define the Generic Wrapper:

// Create a generic interface ApiResponse<DataType>.

// It must have: status (string), timestamp (Date), and data (DataType).

// The Strict Implementation:

// Create a variable userRes typed as an ApiResponse containing a Single User. Assign valid data to it.

// Create a variable postsRes typed as an ApiResponse containing an Array of Blog Posts. Assign valid data to it.

interface UserProfile {
    username: string
    isActive: boolean
}
interface BlogPost {
    title: string
    likes: number
}

//Wrapper

interface ApiResponse<DataType> {
    status: string
    timestamp: Date
    data: DataType
}

const userRes: ApiResponse<UserProfile> = {
    status: 'ok',
    timestamp: new Date(),
    data:{
        username: 'Yvan',
        isActive: true
    }
}

const postsRes: ApiResponse<BlogPost[]> = {
    status: 'ok',
    timestamp: new Date(),
    data:[
        {
            title: 'Typescript',
            likes: 12
        }
    ]
}