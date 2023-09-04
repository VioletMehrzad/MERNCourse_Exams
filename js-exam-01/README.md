# JavaScript Exam no.01 (Sessions 01 to 11)

This is the **first** exam from sessions 01 to 11 of JS basics, taken on 2023.09.04.
The exam required us to use "TypeScript", "Tailwind" and "Flowbite" to create an input with three buttons below it. The first button would generate a random 5-digit number. The second button should create an array of prime numbers up to the given number in the input. Finally, the third button resets the array and input when clicked.
The code was written, following the steps below:

## Defining Types

- Define a custom type for an array of prime numbers:
    `type PrimeNumArrayType = number[];`

## Defining States

- Initialize an empty array to store prime numbers:
    `const primeNumArray: PrimeNumArrayType = [];`

## Defining Importers

- Select the HTML input element with the id "num-input" and store it in the variable numInput:
    `const numInput = document.querySelector<HTMLInputElement>("#num-input");`

- Select the HTML button element with the id "random-num-button" and store it in the variable randomNumButton:
    `const randomNumButton = document.querySelector<HTMLButtonElement>("#random-num-button");`

- Select the HTML button element with the id "prime-num-button" and store it in the variable primeNumButton:
    `const primeNumButton = document.querySelector<HTMLButtonElement>("#prime-num-button");`

- Select the HTML button element with the id "reset-button" and store it in the variable resetButton:
    `const resetButton = document.querySelector<HTMLButtonElement>("#reset-button");`

## Defining Functions

- Define a function to generate a random integer between min and max (inclusive):
    ```
        const getRndInteger = (min: number, max: number): number => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

- Define a function to check if a number is prime:
    ```
        const isPrime = (num: number): boolean => {
            if (num <= 1) return false;
            if (num <= 3) return true;
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        };

- Define a function to get an array of prime numbers up to a given number:
    ```
        const getPrimes = (num: number): PrimeNumArrayType => {
            const primes: PrimeNumArrayType = [];
            for (let i = 2; i <= num; i++) {
                if (isPrime(i)) {
                    primes.push(i);
                }
            }
            return primes;
        };

## Defining Events

- Defining a function to Generate a random number between 10000 and 99999, convert it to a number, and set it as the value of numInput:
    ```
    export const randomNumButtonHandler = () => {
        const randomNum: number = getRndInteger(10000, 99999);
        numInput!.value = randomNum.toString();
    };

- Defining a function to Parse the value in numInput to an integer, Clear the existing prime numbers, Calculate and store new prime numbers up to the given number and Handle invalid input with an error message and an alert:
    ```
        export const primeNumButtonHandler = () => {
            const num = parseInt(numInput!.value, 10);
            if (!isNaN(num)) {
                primeNumArray.length = 0;
                primeNumArray.push(...getPrimes(num));
                console.log(primeNumArray);
            } else {
                console.error("Invalid input!");
                alert("Invalid input. Please enter a valid number.");
            }
        };

- Defining a function to Clear the primeNumArray and reset the numInput value:
    ```
        export const resetButtonHandler = () => {
            primeNumArray.length = 0;
            numInput!.value = ""
            console.log("Array and Input has been reset.");
            console.log(primeNumArray)
        };

## Add Event Listeners

- Add a click event listener to the "random-num-button":
    `randomNumButton?.addEventListener("click", randomNumButtonHandler);`

- Add a click event listener to the "prime-num-button":
    `primeNumButton?.addEventListener("click", primeNumButtonHandler);`

- Add a click event listener to the "reset-button":
    `resetButton?.addEventListener("click", resetButtonHandler);`