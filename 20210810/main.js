import { users } from './data.js';

const arr = [1,4,7,4,9,343,7,5,343,7,6,33];

const analytics = users.reduce((acc, el) => {
    acc[el.gender] += 1;
    return acc;
}, {
    male : 0,
    female : 0
});

// console.log(arr.reduce((acc, el) => acc + el));
console.log(analytics);