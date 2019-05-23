// The class keyword creates a constant so you can not redfine it
class Student {
    // The method to create new objects must be called constructor
    constructor(firstName, lastName, year) {
        // this refers to the individual instace of the class
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'You are expelled!'
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) {
            return a + b;
        })
        return sum / this.scores.length;
    }
    static enrollStudents() {
        return "Enrolling Students!"
    }
}

// To create a new instance use the new keyword

let firstStudent = new Student("Huthman", "King", 2010)
let secondStudent = new Student("John", "Doe", 3)

console.log(firstStudent.markLate(), firstStudent.addScore(22));
console.log(firstStudent.markLate(), firstStudent.addScore(30));
console.log(firstStudent.markLate(), firstStudent.calculateAverage());

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /* Static makes it a class method, no longer call it on an instance
     but the class itself
     */
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(p1) // Point {x: 5, y: 5}
console.log(p2) // Point {x: 10, y: 10}
console.log(Point.distance(p1, p2)) // 7.07