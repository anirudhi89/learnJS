var students = []
// array methods
// students.pop()// remove last item
// students.splice(n, x) // remove x items at certain index n
// students.unshift() //add item to start
// students.splice(2, 0, "y") add y at index 2, remove 0 elements
// students.shift() //removes first element
// var x = students.slice() // copy of array
// z = students.splice(0, 1) create a new array which holds 1 item, which was the 0th index of students, the 0th index of students was removed

students.unshift("hello");
students.unshift("hey")


let y = window.prompt("add a student: ") //user input
students.splice(2, 0, y)
if (true) {
    students.splice(0, 1)
    console.log("done")
}
console.log("before")
console.log(students)

// for loop to add stuff
for (let i = 0; i < 10; i++){
    students.splice(1, 0, i)
}

console.log("after for loop:")

console.log(students)

