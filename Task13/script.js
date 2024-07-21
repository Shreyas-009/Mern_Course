
// take input array from user
const TakeInputArray = () => {
    let arr = [];
    const ArrayLength = prompt("Enter Number of elements you want to enter : ");

    if (ArrayLength < 1) {
        console.log("Please enter a valid number");
        return;
    }

    for ( let i = 0 ; i < ArrayLength ; i++) {
        arr.push(prompt(`Enmter ${i+1} Value : `)); 
    }

    return arr;
}

// find maximum number from the arrat / element 
const FindMaxNumber = (arr) => {
    let MaxNumber = null;

    for ( let i = 0 ; i < arr.length ; i++ ) {
        if (arr[i] > MaxNumber) {
            MaxNumber = arr[i];
        }
    
        }
    return MaxNumber;
}

// find sum of all elements
const FindSumOfElements = (arr) => {
    let Sum = 0;
    arr.forEach(val => Sum += parseInt(val));
    return Sum;
}

// find count of add elements
const FindCountOfOddElements = (arr) => {
    let Count = 0;
    arr.forEach(val => val%2 ? Count++ : Count);
    return Count;
}

const PerformingOprations = () => {
    
    const Array = TakeInputArray();
    const MaxNumber = FindMaxNumber(Array);
    const SumOfElements = FindSumOfElements(Array);
    const CountOfOddElements = FindCountOfOddElements(Array);

    console.log(`Array : [${Array}]`);
    console.log(`Maximum number : ${MaxNumber}`);
    console.log(`Sum of all elements : ${SumOfElements}`);
    console.log(`Count of odd numbers : ${CountOfOddElements}`);
}

PerformingOprations();