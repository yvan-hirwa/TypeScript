// Debug
// function greet(name) {
//   return "Hello " + name.toUpperCase();
// }

// const names = ["alice", "bob", 123];
// names.forEach(greet);


function greet(name: string): string {
  return "Hello " + name.toUpperCase();
}

const names = ["alice", "bob"];
names.forEach(greet);