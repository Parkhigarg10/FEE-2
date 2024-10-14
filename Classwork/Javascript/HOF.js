// Higher Order Function: A function that takes a function as an argument or returns a function as a result.

// Print the name 20 times
function printName(func, num) {
    for (let i = 1; i <= num; i++) {
        func();
    }
}

let myName = function() {
    console.log('Parkhi');
};
printName(myName, 20);

// Check odd numbers in array
function checkarray(arr, func) {
    let newArr = [1,2.3,4,5,6,7,8,9,10];
    
}