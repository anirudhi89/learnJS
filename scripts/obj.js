// constructor 
function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi I'm " + this.firstName + " and I'm " + this.age + " years old"
    }
}

var s1 = new Student("Jenny", "Laga", 14);
console.log(s1)
console.log(s1.greeting())

var arrayStudent = []
arrayStudent.push(new Student("Jimmy", "Laga", 8))
arrayStudent.push(new Student("Timmy", "Turner", 4))
arrayStudent.push(new Student("Carl", "Jr", 2))


// this be a js object similar to a python dict
// var student0 =  {
//     // key: value
//     firstName: "Jackie",
//     lastName: "Chan",
//     age: 7,
// };

// // we use objectName.PropertyName to access
// // OR
// // objectName["propertyName"]

// student0.lastName;
// student0["lastName"]

// var student1 = new Object()
// student1.firstName = "john"
// student1.lastName = "smith"
// student1.age = 7;


// arrayStudent.push(student1)
// arrayStudent.push(student0)

for (var i = 0; i < arrayStudent.length; i++) {
    console.log(arrayStudent[i].greeting())
}

var student = arrayStudent[0]

//for in loop
for (var key in student) {
    console.log(student[key])
}