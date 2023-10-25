// Example 1

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

// The most common solution:

const addUpTo = (n) => {
    let total = 0;
    for(let i = 1; i <=n; ++i) {
        total += i
    }
    return total;
}

//console.log(addUpTo(6)) // output: 21

// Second solution (there are more solutions to the problem, we're just demonstrating how to determine which solutions are better)
    // This takes a mathematical approach and gives the correct answer.

const addUpTo2 = (n) => {
    return n * (n + 1) / 2;
}

//console.log(addUpTo2(6)) // output: 21

// So which solution is better?
//  - What does better mean?
//      - Faster?
//      - Less memory-intensive?
//      - More readable?
//      - Brevaty?

// We will focus on evaluating speed and timing.

// Below we have a timer to evaluate the performance of the functions

// Timer for addUpTo
let t1 = performance.now() // this is a built method saved to a variable, executes at the start of the function
addUpTo(1000000000)
let t2 = performance.now() // this checks when the code ends
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// Timer for addUpTo2
let t1a = performance.now()
addUpTo2(1000000000)
let t2a = performance.now()
console.log(`Time Elapsed: ${(t2a - t1a) / 1000} seconds.`)

// The time lapse will vary with each execution
    // - When we look at the time lapse we notice the addUpTo2 function executes significantly faster than addUpTo function
    // - We must remember, that even though we can determine how fast the function execute, this really is NOT the best method to apply when determaining the best solution
        // - the lapse time doesn't give us a way to label and compare solutions against one another

// This gives us: The Problem with Time
    // - Different machines will record different times
        // - The measurements can change
    // - The same machine records different times
    // - For fast algorithms, speed measurements may not be precise enough.

// Using time might be a good way to start when looking at the efficiency, but that is not the best approach.
    // - There is a better way to determine the best solution, which includes labels, and that is the Big O Notation.
