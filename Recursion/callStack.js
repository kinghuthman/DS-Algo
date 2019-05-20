function takeShower() {
    return "Showering!"
}

function eatBreakfast() {
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()

/* wakeUp() is called, takeShower is invoked and put at the top 
of the stack. It returns a value of "Showering", then it is removed
from the top of the stack. eatBreakfast is then called. items is an 
array. cookFood() returns a random item from that array. once the 
random item is returned, we head back to the eatBreakfast() function
while cookFood() is removed from the stack. Then eatBreafast() returns
"Eating ${meal}" and eatBreakfast() is removed from the stack. Our
wakeUp() function still remains at the top of the stack and returns
console.log("Ok ready to go to work!")
*/