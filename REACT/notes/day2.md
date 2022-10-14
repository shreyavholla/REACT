Day 2

ES2015/ ES 6 version features

Traspiler: Babel / Tracuer

ES6 ==> babel/tracuer ==> ES5

Arrow function
function add(x, y) { return x + y; }

var add = (x, y) => { return x + y; }

OR

var add = (x,y) => x + y;

scope variables and constant [ let and const]
var g = 100; function doTask() { var a = 10; if( g > a) { let b = 20; // block scope c = 30; } console.log(g, a, b, c); // b is not visible here }

doTask(); console.log(g, a, b, c); // b is not visible here

--

const PI = 3.14159;

PI = 4.5; // error

template string literal
as of JS 5 we have 'data' or "data" for string literal

ES 6 introduced new string literal ``

var name ="Peter";

var msg = Welcome ${name}, JavaScript training

Destructuring
4.1) object let product = {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"};

let {name, price} = product;

console.log(name , price);

old way: console.log(product.name , product.price);

4.2) array

let colors = ["red", "green", "blue", "pink", "orange"];

ES 5 way: let r = colors[0]; let g = colors[1];

ES 6 way:

let [r, g, b, ...others] = colors;

// r ==> red // b ==> blue // others ==> ["pink", "orange"]

clone
let product = {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"};

let ref = product; // ref --> pointer

ref.price = 980000.00

clone:

let product = {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"};

let ref = {...product}; // clone ref.price = 980000.00

var data = [5,10,2,8,4,13,9];

var elems = [...data]; // clone

Promise API
Promises simplify deferred and asynchronous computations. A promise represents an operation that hasn't completed yet.

pending
fulfilled / resolved
rejected
Synchronous call:

let res = doTask(); console.log("done"); // blocked

ASynchronous call: assume doTask() is async code

doTask().then( (res) => console.log(res), // resolved (err) => console.log(err) // rejected );

console.log("other tasks"); // not blocked

async/await
  async function getData() {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await response.json();
            console.log(data);
        }

        getData()


========================================

Last login: Fri Oct  7 11:00:43 on ttys000
admin@INC02R46VYG8WP ~ % ls
Applications                Movies
Desktop                    Music
Documents                OneDrive - Synchronoss Technologies
Downloads                Pictures
Library                    Public
admin@INC02R46VYG8WP ~ % cd Desktop
admin@INC02R46VYG8WP Desktop % md nodeexample
zsh: command not found: md
admin@INC02R46VYG8WP Desktop % mk nodeexample
zsh: command not found: mk
admin@INC02R46VYG8WP Desktop % mkdir nodeexample
admin@INC02R46VYG8WP Desktop % cd nodeexample
admin@INC02R46VYG8WP nodeexample % npm init --y
Wrote to /Users/admin/Desktop/nodeexample/package.json:

{
  "name": "nodeexample",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


admin@INC02R46VYG8WP nodeexample % npm install lodash

added 1 package, and audited 2 packages in 636ms

found 0 vulnerabilities
admin@INC02R46VYG8WP nodeexample % npm install mocha chai request -D
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142

added 133 packages, and audited 135 packages in 3s

21 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
admin@INC02R46VYG8WP nodeexample % 
