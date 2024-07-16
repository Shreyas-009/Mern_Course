// Function to find the sum of the digits in an array of numbers
const sumOfNumbers = (arr) => {
  let value = 0;

  arr.forEach((val) => {
    value += parseInt(val);
  });

  return value;
};

// Function to check if a number is Armstrong or not
const checkArmstrong = (number) => {
  const numString = number.toString();
  const numDigits = numString.length;
  let value = 0;

  for (let digit of numString) {
    value += Math.pow(parseInt(digit), numDigits);
  }

  return value === parseInt(number) ? "Yes" : "No";
};

// Function to find factors of a given number
const findFactors = (value) => {
  let factors = [];

  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      factors.push(i);
    }
  }

  return factors;
};

// Function to check if a number is prime
const checkPrime = (number) => {
  if (number <= 1) return "No";

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return "No";
    }
  }

  return "Yes";
};

// Function to perform all operations and display results
const performOperations = () => {
  const number = prompt("Enter your number");

  // Calculating results
  let sum = sumOfNumbers(number.split(""));
  let armstrong = checkArmstrong(number);
  let prime = checkPrime(parseInt(number));
  let factors = findFactors(parseInt(number));

  // Logging results to the console
  console.log(`Number: ${number}`);
  console.log(`Sum of its digits: ${sum}`);
  console.log(`Is it an Armstrong number? ${armstrong}`);
  console.log(`Is it a prime number? ${prime}`);
  console.log(`Factors: ${factors}`);
};

// Calling the function to perform operations when the script is executed
performOperations();
