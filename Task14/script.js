const num1 = prompt("enter first number : ");
const num2 = prompt("enter second number : ");
const division = new Promise((resolve, reject) => {
  if (num2 == 0) {
    reject("Number cant be divisible by 0");
  } else {
    resolve(num1 / num2);
  }
})
.then((value) => console.log(`Devision is : ${value}`))
.catch((err) => console.log("Promis is been rejected \nError : ", err));
