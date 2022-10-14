JavaScript and React
JS and React

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/JS_REACT

=====================================================

Softwares Required:

Chrome Web browser with following extensions 1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react] 1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
Visual Studio Code [ https://code.visualstudio.com/ ]
NodeJS Latest LTS [ https://nodejs.org/en/download/ ] 16.x.x
=================================================

Web technologies

Web Server Rendering: SSR -> Server Side Rendering CSR -> Client Side Rendering SSG -> Static Site Generatation (ISG)

SPA --> Single Page Application ==> index.html

XML

<title>iPhone 14</title> 120000.00
JSON: { id: 3, title: "iPhone 14", price: 120000.00 }

HTML + CSS + JS

int x;

JavaScript --> Scripting language, loosely typed, dynamically typed language

var x;

x = "Raj"; // string x.toUpperCase();

x = 100; x++;

x = false;

file.js ==> JS Engine

JS engines:

V8 --> Google --> Chrome / NodeJS
SpiderMonkey --> Firefox
JavaScriptVM --> Opera
Chakra / Continnum
Nashorn
Execution Context

var g = 100;

function doTask() { var a = 10; if( g > a) { var b = 20; c = 30; } console.log(g, a, b, c); }

doTask(); console.log(g, a, b, c);

==========

JS is event driven

file.js

console.log("Hello!!!");

setInterval(function timed() { console.log("timed!!!"); }, 1000);

console.log("adding events");

$("#btn").click(function click() { console.log("Clicked!!!!"); });

console.log("Bye!!!");

class TimerThread extends Thread { TimerThread(CallbackQueue queue, fn, time) {...}

public void run() {
	while(true) {
		Thread.sleep(time);
		queue.push(fn);
	}
}
}

function add(x, y) { console.log(x + y); }

let res = add(4, 5);

console.log(res); // res will be undefined

function add(x, y) { return x + y; }

let res = add(4, 5);

console.log(res); // 9

function add(x, y) { return x + y; }

let res = add(4, 5);

console.log(res); // res is undefined

OOP

Object contains state and behaviour. state of object has to be changed using actions/behaviour/message

var obj = new Object(); obj.x = 10; obj.setX = function() {..}

using Function constructor

function Person(name, age) { this.name = name; this.age = age; }

Person("Harry", 34); // here window name and age is set

var p1 = new Person("Larry", 21); // memory in heap area is created for "p1" object; now within PErson "this" refers to "p1"

var p2 = new Person("Anna", 20);

Adding behaviour:

function Person(name, age) { this.name = name; this.age = age; }

Person.prototype.getName = function() { return this.name; }

Person.prototype.setName = function(n) { this.name = n; }

Person.prototype.getAge = function() { return this.age; }

Person.equals = function(a,b) { if(a.age === b.age) { return true; } return false; }

var p2 = new Person("Anna", 20); console.log(p2.getName(), p2.getAge());

Person.equals(p1, p2);

====================

JSON JavaScript Object Notation key is string: value can be ==> number, boolean, string, null, undefined, array, object, function
let person = { id: 1, name : "Tim", age : 32 }

person.age;

=============

HOF ==> High Order Function

functions accept function as arguments
functions returns a function
var data = [5,10,2,8,4,13,9];

for(var i = 0; i < data.length; i++) { console.log(data[i]); }

for(var i = 0; i < data.length; i++) { alert(data[i]); }

SOLID Design Priciple O ==> Open Close Principle

function forEach(elems, action) { for(var i = 0; i < elems.length; i++) { action(elems[i]); } }

forEach(data, console.log); forEach(data, alert);

https://rxmarbles.com/

====================================

HOF ==> functions returns a function

function greeting(msg, name) { return msg + " " + name; }

greeting("Good morning", "Peter"); greeting("Good morning", "Kim"); greeting("Good morning", "Smitha");

function greeting(msg) { return function(name) { return msg + " " + name; } }

var morningGreet = greeting("Good morning");

morningGreet("Anitha"); morningGreet("Sunitha");

========

function adder(base) {
	return function(no) {
		return base + no;
	}
}

var fiveAdder = adder(5);
fiveAdder(2);
fiveAdder(6);

var threeAdder = adder(3);
threeAdder(2); 



fiveAdder.prototype > constructor > scope => closure
===============

getEmployee(4); ==> API call to Server ==> Database ==> JSON ==> send JSON getEmployee(2); ==> API call to Server ==> Database ==> JSON ==> send JSON

getEmployee(4); ==> Cache

Memoization pattern: In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

=========================================================================================

DOM ==> Document Object Model

The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.

apis to

create element
access elements
traverse thro elements
remove elements
mutate
APis for accessing elements:

document.getElementById("")
<button id="btn">Ok</button>
var b = document.getElementById("btn")

2) 
<p>one</p>
<div>abc</div>
<p>two</p>

document.getElementsByTagName("p");

3) document.querySelector()
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>


<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>


<h1 id="myHeader">My Header</h1>

document.querySelector("#myHeader") ; // select by id

document.querySelector(".city") ; // select by class

document.querySelector("ul") ; // select by tag name


document.querySelectorAll("p") ; // select by tag
=========================================

Event Capturing and Bubbling

================================================

ES 5 ==> ECMAScript 5 ==> Most of the browsers support

ES 6 ==> ECMAScript 6 ==> ES2015 https://caniuse.com/

