// debug  

// type ID = string | number;

// function getLength(id: ID) {
//   return id.length;
// }

// getLength(123);
// getLength("abc");

type ID = string | number;

function getLength(id: ID) {
    if(typeof id === 'string')
        return id.length;

    return `${id}`.length
}

console.log(getLength(123));
console.log(getLength("abc"));

