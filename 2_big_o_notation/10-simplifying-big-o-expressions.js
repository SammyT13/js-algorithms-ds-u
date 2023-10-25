// Simplifying Big O Expressions

// Rules To Follow for Big O Notation
    // These rules are consequences of the definition of Big O Notation
// 1. Constants don't matter
    // Examples:
        // O(2n) simplified to: O(n)
        // O(500) simplified to: O(1)
        // O(13n^2) simplified to: O(n^2)
// 2. Smaller terms don't matter
    // Examples:
        // O(n + 10) simplified to: O(n)
        // O(1000n + 50) simplified to: O(n)
        // O(n^2 + 5n + 8) simplified: O(n^2)
// *** We have to look at the big picture when simplifying. We know n^2 will be greater in the long-run, so we should pay attention to it ***
// Things to keep in mind:
    // Analyzing complexity with big O can get complicated
    // There are rules of thumbs that can be followed:
        // 1. Arithmetic operations are constant
            // -, +, * , / the computer takes the same amount of time to execute 1 + 1 as 500 * 500
        // 2. Variable assignment is constant
            // x = 2 is roughly the same as x = 100000000
        // 3. Accessing elements in an array (by index) or object (by key) is constant
        // 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

// Example: O(n)

const logAtLeast5 = n => {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

logAtLeast5(10)
logAtLeast5(1)

// Analyze:
    // We have a for loop
    // The 5 in the Math method doesn't matter
    // What matter is the n
        // As n increases, so will the runtime
    // This is an O(n) function because the runtime increase is based on the size of n alone.

// Example:

const logAtMost5 = n => {
    for (var i = 1; i <= Max.min(5, n); i++) {
        console.log(i)
    }
}

// Analyze:
    // We have a for loop
    // The 5 in the Math method does matter in this case
    // What makes this different then the previous function
        // Since we're looking at the min, n can be 100, however, 5 will be the biggest number it can loop, since this is a min method
        // n can increase, but it will never loop more than 5
    // This is an O(1) function because the runtime is based on the constant of 5, since n can be greater than 5, the min will always loop 5 or less, but nothing greater.

// Take Away:
    // We should be able to determine, when given a big O notation, which expression is better.
    // Example: We should know that an expression with O(n) is better than O(n^2)
    


