// 🛑 The Challenge: The Transformation Pipeline
// Scenario: You are building a Task Management app (like Jira).

// Instructions:

// The Master Type:

// Create an interface Task with:

// id: number

// title: string

// description: string

// assignee: string

// priority: "high" | "low"

// The Transformations:

// Create a type CreateTaskDTO. This is used when creating a task. It should have everything in Task except the id 
// (because the DB generates that). Use Omit.

// Create a type UpdateTaskDTO. This is used when editing. It should allow you to pass any subset of fields from Task 
// (e.g., just change the title, or just the priority), but the id is NOT allowed to be updated. 
// (Hint: Use Omit first to remove ID, then Partial to make the rest optional).

// Create a type TaskSummary. This is for the dashboard list. It only needs id, title, and priority. Use Pick.

// The Test Function:

// Write a function create(task: CreateTaskDTO).

// Write a function update(id: number, changes: UpdateTaskDTO).

interface Task {
    id: number
    title: string
    description: string
    assignee: string
    priority: 'high'| 'low'
}

type CreateTaskDTO = Omit<Task, 'id'>
type UpdateTaskDTO = Omit< Partial<Task>, 'id'>
type TaskSummary = Pick<Task, 'id'|'title'|'priority'>

function create(task: CreateTaskDTO){}
function update(id: number, changes: UpdateTaskDTO){}