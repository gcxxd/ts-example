(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return `hello, ${name}`;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeter_1 = require("./greeter");
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
function showHello(divName, name) {
    const ele = document.getElementById(divName);
    console.log(divName);
    ele.innerHTML = greeter_1.sayHello(name);
}
showHello('greet', 'Typescript');
console.log(greeter(zgc));
console.log(greeter_1.sayHello('Typescript'));
},{"./greeter":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9fYnJvd3Nlci1wYWNrQDYuMS4wQGJyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9ncmVldGVyLnRzIiwic3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUFnQixRQUFRLENBQUMsSUFBWTtJQUNqQyxPQUFPLFVBQVUsSUFBSSxFQUFFLENBQUM7QUFDNUIsQ0FBQztBQUZELDRCQUVDOzs7O0FDRkQsdUNBQXFDO0FBR3JDLE1BQU0sT0FBTztJQUVULFlBQW1CLFNBQWdCLEVBQVMsUUFBZ0I7UUFBekMsY0FBUyxHQUFULFNBQVMsQ0FBTztRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQUVELElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztBQUM1QixJQUFJLEtBQUssR0FBVyxHQUFHLENBQUM7QUFDeEIsSUFBSSxJQUFJLEdBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLElBQUksT0FBTyxHQUFrQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFPN0MsU0FBUyxPQUFPLENBQUMsTUFBYztJQUMzQixPQUFPLE9BQU8sTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUE7QUFDdEQsQ0FBQztBQUVELElBQUksR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVqQyxTQUFTLFNBQVMsQ0FBQyxPQUFlLEVBQUUsSUFBWTtJQUM1QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDcEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFTLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYGhlbGxvLCAke25hbWV9YDtcclxufSIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSAnLi9ncmVldGVyJztcclxuXHJcblxyXG5jbGFzcyBTdHVkZW50IHtcclxuICAgIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmlyc3ROYW1lOnN0cmluZywgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmZ1bGxOYW1lID0gZmlyc3ROYW1lICsgbGFzdE5hbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBpc0RvbmU6IGJvb2xlYW4gPSBmYWxzZTtcclxubGV0IGNvdW50OiBudW1iZXIgPSAxMjM7XHJcbmxldCBsaXN0OiBudW1iZXIgW10gPSBbMSwgMiwgM107XHJcbmxldCBsaXN0QXJyOiBBcnJheTxTdHJpbmc+ID0gWycxJywgJzInLCAnMyddO1xyXG5cclxuaW50ZXJmYWNlIFBlcnNvbiB7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdyZWV0ZXIocGVyc29uOiBQZXJzb24pIHtcclxuICAgIHJldHVybiBgaGksICR7cGVyc29uLmZpcnN0TmFtZX0ke3BlcnNvbi5sYXN0TmFtZX1gXHJcbn1cclxuXHJcbmxldCB6Z2MgPSBuZXcgU3R1ZGVudCgn5bygJywgJ+W5v+aFiCcpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0hlbGxvKGRpdk5hbWU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKGRpdk5hbWUpXHJcbiAgICBlbGUuaW5uZXJIVE1MID0gc2F5SGVsbG8obmFtZSk7XHJcbn1cclxuXHJcbnNob3dIZWxsbygnZ3JlZXQnLCAnVHlwZXNjcmlwdCcpO1xyXG5jb25zb2xlLmxvZyhncmVldGVyKHpnYykpO1xyXG5jb25zb2xlLmxvZyhzYXlIZWxsbygnVHlwZXNjcmlwdCcpKTsiXX0=
