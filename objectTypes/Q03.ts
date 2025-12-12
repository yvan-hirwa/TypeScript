// debug 
// function printUser(user) {
//   console.log(user.name.toUpperCase());
//   console.log(user.age + 1);
// }

// printUser({ name: "Sara", age: "25" });

type User = {
    name: string
    age: number
}
function printUser(user: User) {            //{name: string, age: number}
  console.log(user.name.toUpperCase());
  console.log(user.age + 1);
}

printUser({ name: "Sara", age: 25 });