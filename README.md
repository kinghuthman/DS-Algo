# Data Structures and Algorithms

## Big O Notation  

### Intro to Big O

- Provides a numeric representation of our code
- It is important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, idenifying parts of the code that are inefficient can help us find pain points in our application
- Less important: it comes up in interviews

### Timing Our Code

- Follow timingOurCode2.js
- What does better mean?
  - Faster?
  - Less memory-intensive?
  - More readable?
- Why not use timers?
  - performance.now()
    - returns a DOMHighResTimeStamp, measured in millisecodns
    - returned value represents the time elapsed since the time origin 
    - Not the most reliable method
  - The problem with time
    - Different machines will record different times
    - The same machine will record different times
    - For fast algorithms speed measurements may not be precise enough