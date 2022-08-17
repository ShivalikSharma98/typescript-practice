// TYPES
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return result;
    }
}
// EXAMPLE OF TYPESCRIPT INFERENCE TYPE, IT UNDERSTANDS NUMBER2 US A NUMBER AND PRINTRESULT IS A BOOLEAN WITHOUT IT BEING DECLARED AS SUCH LIKE WE DID FOR NUMBER1
let number1: number;
number1 = 5;

const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);

// OBJECT TYPES
const me: {} = {name: 'Max'}
// is the same thing as
const me2: object = {name: 'Max'}

// in depth example
const person: {
    name: string;
    age: number;
} = {
    name: 'Shiv',
    age: 24,
}

console.log(person.name);

// ARRAY TYPES
const shiv = {
    name: 'Shiv',
    age: 24,
    hobbies: ['Sports', 'Coding']
};

let favoriteActivities: string[];
// array must have strings, you cannot pass in numbers or booleans. If you need to allow all data types into the array you can use any[] but that would be losing all benefits of typescript
favoriteActivities = ['Camping'];

console.log(favoriteActivities);

for (const hobby of shiv.hobbies) {
    console.log(hobby);
}

// TUPLES
// a fixed length array that you dictate how what data type and in what order that data should be arranged within the array example: hobbies: [string, number] this means array should only include 2 objects [0] should be a string and [1] should be a number

// ENUMS