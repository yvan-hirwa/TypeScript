// debug
// type User = {
//   id: number;
//   name: string;
//   isAdmin: boolean;
// };

// function getCurrentUser(): User {
//   if (Math.random() > 0.5) {
//     return { id: 1, name: "Alice", isAdmin: true };
//   }
// }

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

function getCurrentUser(): User {
  if (Math.random() > 0.5) {
    return { id: 1, name: "Alice", isAdmin: true };
  }else{
    return getCurrentUser() 
  }
}
