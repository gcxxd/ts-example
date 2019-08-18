class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
}
let isDone = false;
let count = 123;
let list = [1, 2, 3];
let listArr = ['1', '2', '3'];
function greeter(person) {
    return `hi, ${person.firstName}${person.lastName}`;
}
let zgc = new Student('张', '广慈');
console.log(greeter(zgc));
