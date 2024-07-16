const EvenOddChecker = () => {
    let number = prompt("Enter first Number");   
    if (number%2) {
        console.log(`The number ${number} is Odd`);
    } 
    else{
        console.log(`The number ${number} is Even`);
    } 
}

EvenOddChecker();