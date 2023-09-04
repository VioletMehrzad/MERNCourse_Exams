import { primeNumArray } from "./state.js";
import { numInput } from "./importer.js";
import { getRndInteger, getPrimes } from "./functions.js";

export const randomNumButtonHandler = () => {
    const randomNum: number = getRndInteger(10000, 99999); // Generate a random 5-digit number
    numInput!.value = randomNum.toString(); //convert the randomNum to string, and set it as the value of numInput
};

export const primeNumButtonHandler = () => {
    const num = parseInt(numInput!.value, 10); // Parse the value in numInput to an integer
    if (!isNaN(num)) {
        primeNumArray.length = 0; // Clear the existing prime numbers
        primeNumArray.push(...getPrimes(num)); // Calculate and store new prime numbers up to the given number
        console.log(primeNumArray);
    } else {
        console.error("Invalid input!");
        alert("Invalid input. Please enter a valid number."); // Handle invalid input with an error message and an alert
    }
};

export const resetButtonHandler = () => {
    primeNumArray.length = 0;  // Clear the primeNumArray and reset the numInput value
    numInput!.value = ""
    console.log("Array and Input has been reset.");
    console.log(primeNumArray)
};