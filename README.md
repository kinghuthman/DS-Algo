# Data Structures and Algorithms

## Table of Contents

> > [Problem Solving Patterns](#problemSolvingPatterns)
> >
> > > [Frequency Counter Pattern](#frequencyCounterPattern)

## Big O Notation

### Intro to Big O

- Provides a numeric representation of our code
- It is important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our application
- Less important: it comes up in interviews

### Timing Our Code

- Follow timingOurCode2.js
- What does better mean?
  - Faster?
  - Less memory-intensive?
  - More readable?
- Why not use timers?
  - performance.now()
    - returns a DOMHighResTimeStamp, measured in milliseconds
    - returned value represents the time elapsed since the time origin
    - Not the most reliable method
  - The problem with time
    - Different machines will record different times
    - The same machine will record different times
    - For fast algorithms speed measurements may not be precise enough

### Counting Operations

- Rather than counting seconds, which are so variable... We can count the number of simple operations the computer has to perform!
  - n \* (n + 1) / 2
    - this is three operations
    - it doesn't matter what n is, there are only three calculations happening
  - count assignments and operations
  - the number of operations grow roughly in proportion with n

### Visualizing TIme Complexities

- eh

### Official intro into Big O

- It allows us to talk formal about how the runtime of an algorithm grows as inputs grow
- We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
  - f(n) could be linear (f(n) = n)
    - function with the input of n and the output
    - describing the relationship between the input and the runtime
    - could be linear, as n scales "input", runtime scales
  - f(n) could be quadratic (f(n) = n2)
    - as n grows the runtime squares in relation to the square of n
  - f(n) could be constant (f(n) = 1)
    - as n grows, it doesn't have an impact
  - f(n) could be something entirely different!

### Simplifying Big O Expressions

- Constants Don't Matter
  - O(2n) simplified down to O(n)
  - O(500) simplified down to O(1)
  - O(13n2) simplified down to O(n2)
- Smaller Terms Don't Matter
  - O(n + 10) simplified down to O(n)
  - O(100n + 50) simplified down to O(n)
  - O(n2 + 5n + 8) simplified down to O(n2)
- Big O Shorthands
  - Analyzing complexity with Big O can get complicated
  - There are several rules of thumb that can help but don't always work
    - Shorthands
      - Arithmetic operations are constant
      - Variable assignment is constant
      - Accessing elements in an array (by index) or object (by key) is constant
      - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

### Space Complexity

- The amount of memory that is taken up
- What about the inputs?
  - Sometimes we'll hear about auxiliary space complexity to refer to space required by the algorithm not including space taken up by the inputs
- Basic rules of thumb
  - Most primitives (booleans, numbers, undefined, null) are constant space
  - Strings require O(n) space (where n is the string length)
  - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

### Logarithms

- The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.
  - Example
    - log(8) = 3
      - 8 / 4 / 2 /1
    - log(25) = 4.64
      - 25 / 12.5 / 6.25 / 3.125 / 1.56 / .7
- Logarithm Complexity
  - Logarithmic time complexity is great
- Who Cares?
  - Certain searching algorithms have logarithmic time complexity
  - Efficient sorting algorithms involve logarithms
  - Recursion sometimes involves logarithmic space complexity

### Recap

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give sus a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run algorithm

## Analyzing Performance of Arrays and Objects

### Section Introduction

- Objectives
  - Understand how objects and arrays work through the lens of Big O
  - Explain why adding elements to the beginning of an array is costly
  - Compare and contrast the runtime for arrays and objects, as well as built-in methods

### The BIG O of Objects

- When to use objects
  - When you don't need order
  - When you need fast access / insertion and removal
- Big O of Objects
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(N)
    - checking to see if a given piece of information is in a value somewhere, not lookup/access
      - is 1 in this array [2, 4, 66, 12, 4]
      - as the number of items in the array grows, n grows
  - Access - O(1)

### When are Arrays Slow

- intrinsic order
- When to use Arrays
  - When you need order
  - When you need fast access / insertion and removal (sort of)
- Big O of Arrays
  - Insertion - it depends
    - Adding to the end is O(1)
    - Adding to the beginning/anywhere but the end is brutal
      - Have to reindex all of the items now
      - O(N)
  - Removal - it depends
    - Removing end is fine
    - Removing anywhere else have to reindex
  - Searching - O(N)
  - Access - O(1)

## Problem Solving Approach

- 5 Step Approach
  - UnderStand the Problem
  - Explore Concrete Examples
  - Break It Down
  - Solve Or Simplify
  - Look Back and Refactor

<a name="problemSolvingPatterns"></a>

## Problem Solving Patterns

### Intro

- Different patterns, not going to work for everything
  - just blueprints

<a name="frequencyCounterPattern"></a>

### Frequency Counter Pattern

- This pattern uses objects or sets to collect values/frequencies of values
  - This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
  - Store array values into objects as keys, with the values as 0, incrementing when one is found
    - do comparison by looping through one of the objects and using bracket notation

### Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well
