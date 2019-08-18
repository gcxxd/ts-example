import { sayHello } from './greeter';


class Student {
    fullName: string;
    constructor(public firstName:string, public lastName: string) {
        this.fullName = firstName + lastName;
    }
}

let isDone: boolean = false;
let count: number = 123;
let list: number [] = [1, 2, 3];
let listArr: Array<String> = ['1', '2', '3'];

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `hi, ${person.firstName}${person.lastName}`
}

let zgc = new Student('张', '广慈');

function showHello(divName: string, name: string) {
    const ele = document.getElementById(divName);
    console.log(divName)
    ele.innerHTML = sayHello(name);
}

showHello('greet', 'Typescript');
console.log(greeter(zgc));
console.log(sayHello('Typescript'));