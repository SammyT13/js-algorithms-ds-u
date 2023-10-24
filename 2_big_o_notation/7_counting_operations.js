// Counting Operations

// - Instead of counting seconds, which vary from machine to machine, we can count the number of simple operations a machine has to perform

// Example

const addUpTo = n => {
    return n * (n + 1) / 2
    // multiplication (*) is 1 operation
    // addition (+) is 1 operation
    // division (/) is 1 operation
    // This leaves us with 3 operations
    // we pay no mind to the size of numbers, like n, 1, and 2 
}
// The above function has few operations

const addUpTo2 = n => {
    let total = 0
    // = 0
        // 1 assignment
    for (let i = 1; i <= n; i++) {
        // i = 1
            // 1 assignment
        // i <= n
            // n comparisons
            // depends how big n is
        // i++
            // n additions
            // n assignments
            // i++ grows as n grows
        total += i
        // +=
            // n additions
            // n assignments
            // as n grows so does += grows
    }
    return total
}

// The above function has many operations

// The counting of operations can be hard
    // Based on the addUpTo2 function it took us awhile to count

// TAKE AWAY
    // Regardless of the exact number, the number of operations grows roughly proportionally with n