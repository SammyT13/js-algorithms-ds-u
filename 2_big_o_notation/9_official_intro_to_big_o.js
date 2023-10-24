// Big O

// - Big O Notation: is a way to formalize fuzzy counting
// - It allows us to talk formally about how the runtime of an alogrithm grows as the input grows
    // - we don't care about the details, only the broad trends

// Big O Definition
    // - We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

    // What this means:
        // - f(n) could be linear: (f(n) = n)
            // as n scales, the run time scales
        // - f(n) could be quadratic: (f(n) = n^2)
            // as n grows, the run time squares based on n
        // - f(n) could be constant: (f(n) = 1)
            // as n grows it stays constant
        // - f(n) could be something entirely different
    // - when n grows how does it affect runtime

// When we're talking about Big O:
    // Our concern is the worse case scenario
    // The upper bound for runtime

// Example: addUpTo2

const addUpTo2 = n => {
    return n * (n + 1) / 2
}

// Always has 3 operations
    // This is O(1)
    // This tells us as n grows, there's no impact to the runtime
    // It's normally constant

// Example: addUpTo

const addUpTo = n => {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total
}

// The number of operations is (eventually) bounded by a multiple of n
    // This is O(n)
    // We don't care if it's 5n or 50n, we're looking how n impacts growth

// Example

const countUpAndDown = n =>  {
    console.log("Going up!")
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    console.log("At the top!\nGoing down...")
    for (let j = n - 1; j >= 0; j--) {
        console.log(j)
    }
    console.log("Back down. Bye!")
}

countUpAndDown(10)

// When looking at the above function to consider the Big O
    // the first for loop:
        // as n grows the loop grows
        // We get: O(n)
    // the second for loop:
        // as n grows the loop grows
        // We get: O(n)
    // We might want to add this up to O2(n), but remember we don't care about the constant
        // This ends up being O(n)

// Example: Nested Loop

const printAllPairs = n => {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i,j)
        }
    }
}

printAllPairs(5)

// When looking at the above function:
    // Here we have a nested loop
    // The first loop we get O(n)
    // The second loop inside the first loop we get O(n)
    // This is not O2(n) like the countUpAndDown function, because it's nested
    // This is actual O(n) * O(n) = O(n^2)
// This will significantly increase runtime quickly (exponentially)

