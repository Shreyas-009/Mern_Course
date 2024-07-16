// Function to calculate compound interest
function calculate(principal, rate, timesCompounded, years) {
    if (principal <= 0 || rate <= 0 || timesCompounded <= 0 || years <= 0) {
        return alert("All inputs must be positive numbers.");
    }

    let interestRate = rate / 100;
    
    let amount = principal * Math.pow((1 + (interestRate / timesCompounded)), (timesCompounded * years));
    
    return amount;
}

function inp() {
    let principal = parseFloat(prompt("Enter the principal amount (₹):"));
    let rate = parseFloat(prompt("Enter the annual interest rate (in %):"));
    let timesCompounded = parseInt(prompt("Enter the number of times interest is compounded per year:"));
    let years = parseInt(prompt("Enter the number of years:"));

    let finalAmount = calculate(principal, rate, timesCompounded, years);
    alert(`The amount after ${years} years is ₹${finalAmount}`);
    console.log(`The amount after ${years} years is ₹${finalAmount}`)
    
}

inp();
