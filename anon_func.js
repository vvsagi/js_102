// // named function

// function sayGreeting(firstName) {
//     return console.log(`Hello ${firstName}`);
// }

// sayGreeting('John');

// // anonymous function

// const sayGreeting = function(firstName) {
//     return console.log(`Hello ${firstName}`);
// }

// sayGreeting('Sally');

// // anonymous function with fat arrows =>

// const sayGreeting = (firstName) => {
//     return `Hello ${firstName}`;
// }

// sayGreeting('Mary');

// const getAge = date => {
//     //
//     const age = 36;
//     return age;
// }

// const sayGreeting = (name, birthday, action) => {
//     const age = action(birthday);
//     return `Hello ${name}, you are ${age} years old`;
// }

// sayGreeting('Bill', '1990-01-01', getAge)

// ASK
// Write a function that allows you to register for class. For now the class is 'algebra'
// This function takes two arguments – class(string), action(function)
// The function that is passed in returns the total number of students enrolled in that class
const students = [
    'Liam',
    'Olivia',
    'Noah',
    'Emma',
    'Oliver',
    'Ava',
    'Elijah',
    'Charlotte',
    'William',
    'Sophia',
    'James',
    'Amelia',
    'Benjamin',
    'Isabella',
    'Lucas',
    'Mia',
    'Henry',
    'Evelyn',
    'Alexander',
    'Harper'
  ];

const totalStudentsPerClass = {
    algebra: 0,
    physics: 0,
    english: 0,
    geography: 0
}

function getClassSize(className) {
    return totalStudentsPerClass[className];
}

const register = (className, action) => {
    
    totalStudentsPerClass[className]++;
    
    const cohortSize = getClassSize(className);

    return console.log(`You are taking ${className} with ${cohortSize - 1} other students!`);
}

module.exports = { register, getClassSize, totalStudentsPerClass, students }