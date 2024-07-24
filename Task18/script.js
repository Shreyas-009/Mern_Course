// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.
// const numbers = [1, 2, 3, 4, 5];
// let result = numbers.map((num) => num * num);
// console.log(`Original array : [${numbers}]`);
// console.log(`Result array : [${result}]`);

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// const showGrades = (score) => {
//   return score.trim() == ''
//     ? "Please Enter Value"
//     : score >= 90
//     ? "A"
//     : score >= 80
//     ? "B"
//     : score >= 60
//     ? "C"
//     : score >= 40
//     ? "D"
//     : score >= 30
//     ? "E"
//     : score > 25
//     ? "F"
//     : "Better you sucide 💀😜";
// };
// let Grade = showGrades(
//   prompt(
//     "Enter your Score \n Grade Range 100-90 'A'  \n Grade Range 89-80 'B' \n Grade Range 79-60 'C' \n Grade Range 59-40 'D' \n Grade Range 39-30 'E' \n Grade Range 29-25 'F' \n Grade Range > 25 'Dont Try to do that 💀'"
//   )
// );
// console.log(Grade);

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// let car = {
//   company: "Toyota",
//   model: "Camry",
//   year: 2020,
// };

// const editCarDetails = (value) => {
// let {company , model , year} = car;

// //Printing initial values
// console.log(`Before : \n\ncompany : ${company} \n model : ${model} \n year : ${year}`);

// //changing year attribute
// car.year = value.trim() ? value : car.year;

// //Printing updated values
// console.log(`\nAfter : \n\ncompany : ${car.company} \n model : ${car.model} \n year : ${car.year}`);
// }

// editCarDetails(
//   prompt(
//     `Before : \n1]company : ${car.company} \n2]model : ${car.model} \n3]year : ${car.year}\n\nEnter car Year`
//   )
// );

// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// const orgNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterPrime = () => {
//     const primes = orgNumbers.filter((num) => {

//         if (num < 2) return false;

//         for (let i = 2; i <= num ** 0.5; i++) {
//             if (num % i === 0) return false;
//         }

//         return true;
//     });
//     return primes;
// }
// console.log(filterPrime(orgNumbers));

// Q5 -  State different use cases of map, filter and reduce functions.
// 1] map - map function is used to iterate over an array and return a new array without affecting original array

// 2] filter - filter also use to itrate and according to  condition written inside filter if it is true it will remove item from new array if condition not satisfies it will include that item inside new array ,filter dosnt affect original array

// 3] reduce - reduce function is used to give a single output by performing some task with original array elements
// example :
// let array = [1, 2, 3, 4, 5];
// let sum = array.reduce((total, currentValue) => total + currentValue);
// console.log(sum);

// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// const fetchData = async () => {
// let Data;

// const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((result) => Data = result);

// console.log(Data);
// }
// fetchData();

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

// let person = {
//     name: "John Doe",
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       state: "NY",
//     },
//     contact: {
//       email: "john.doe@example.com",
//       phone: "1234567891",
//     },
//   };
  
//   const getPhoneNumber = (person) => {
//     return person?.contact?.phone;
//   };
  
//   console.log("Before Removing Contact \n"+getPhoneNumber(person)); 
//   person.contact = null;
//   console.log("\n\nAfter Removing Contact \n"+getPhoneNumber(person)); 
