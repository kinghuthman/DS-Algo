# Data Structures and Algorithms

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
  - n * (n + 1) / 2
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