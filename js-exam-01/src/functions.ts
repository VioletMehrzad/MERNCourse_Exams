// Define a function to generate a random integer
export const getRndInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Define a function to check if a number is prime
export const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};

// Define a function to get an array of prime numbers up to a given number
export const getPrimes = (num: number): number[] => {
    const primes: number[] = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
};