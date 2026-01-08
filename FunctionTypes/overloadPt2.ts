// **Instructions:**

// 1. Define the `User` type (copy from above).
// 2. Write the **Overload Signature** for the ID search.
// 3. Write the **Overload Signature** for the Name search.
// 4. Write the **Implementation Signature** (Return `User | User[]` or `any`).
// 5. Write the **Body Logic**:
//     - *Mock Data:* Just return `{ id: 1, name: "Neo" }` for the ID case.
//     - *Mock Data:* Just return `[{ id: 1, name: "Neo" }, { id: 2, name: "Neo" }]` for the Name case.

// **Show me the code.** This will prove if you understand the mapping between specific inputs and specific outputs.

type User = {
    id: number
    name: string
}

function findUser (query: number): User;
function findUser(query: string): User[];
function findUser(query: number | string): User | User[]{
    if(typeof query === "number"){
        return  { id: 1, name: "Neo" }
    }else{
       return [{ id: 1, name: "Neo" }, { id: 2, name: "Neo" }]
    }
}