# Code Snippets :

https://github.com/BanuPrakash/JS_REACT

This package has installed:

- Node.js v16.17.1 to /usr/local/bin/node
- npm v8.15.0 to /usr/local/bin/npm

Make sure that /usr/local/bin is in your $PATH.



# Introduction

Popular web servers:

- Apache, IIS, NginX
- they are capable of load balancing
- static pages
- dynamic content :
  - based on a request, a response comes
  - ENGINES / CONTAINERS / NODE PLATFORM/ SERVLET CONTAINER: configured along with the server, these are server side applications

### Rendering

a) Server Side Rendering  (SSR): 

- server sends plain html page
- no processing in browser
- clients are tin clients
- tags are converted to UI
- eg. HTML, pdf
- Problem:
  -  Payload Issues (every content, when a change was made, every request that was made.. the whole page came from the server) 
  - Very Slow
- b) Clinet Side Rendering (CSR) :
  - As a Solution, SPA was introduced. --- Single page application : that has only one index.html page
  - But the issue with SPA, is SEO (Search Engine Optimisation..) then they mixed and used

c) Static Side Generation (SSG) with Incremental Side Generation (ISR/ISG):

- server sends a dynamic webpage to the client and data is regenerated in a fixed time interval.

# JavaScript

- js is a scripting language

- interpreted language, loosely coupled, not complied

  a) Global Context Creation

  b) Global Execution Context

  c) Function Context Creation

  - var variables are hoisted here

  d) Function Execution Context

  

- JS is event driven :

  - Stack : perform log calls
  - WebApi --- Threads asynchronously --- some functions get registered with the webApi
  - CallBack Queue --- all functions in the webApi come to the callback queue
  - Event Loop ---- is like a infinite while true loops; check if the stack is empty and sends a function from the callback queue to the stack and gets executed. ----- only the event loop is a single thread..



# OOPS : --- Prototypes



```javascript
```

# HOP -- Higher Order Functions:



Lib.js 

```javascript
function forEach(elems, action) {
	for(var i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

function filter(elems, predicateFn) {
    var res = [];
    forEach(elems, function(e) {
        if(predicateFn(e)) {
            res.push(e);
        }
    });
    return res;
}
Footer

```

HOF.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script src="lib.js"></script>

    <script>
        var data = [5, 10, 2, 8, 4, 13, 9];
        var products = [
            { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
            { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
            { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
            { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
            { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }];

        var evens = filter(data, function(e) { return e % 2 === 0});

        var mobiles = filter(products, function(e) { return e.category === 'mobile'});

        forEach(evens, console.log);
        forEach(mobiles, console.log);

    </script>
</body>

</html>
```



func arg as func

filter - subset of data

map - transform the data



Closure --- func returining a func... 

# DOM - Document Object Model



​	DOM

​    event and listnening

​    event capturing and bubbling

​    ES 5 ==> ECMAScript 5 ======= compatible with most browsers

​    ES6 / ES2016 features:

1) 

​     Refer js official documentation



# To Do List



​     -- js official documentation and learn

​     --- mvvm

​    --- bus booking done

   --- house hunting done

  --- MF check & register online done

  --- calculate budget

11156 - hdfc

3772 - sbi

total -- 14928/- 

840 bus

802 bus



8597 -- total

4825 to sbi 

leftover in hdfc --- 6331 -- will go to mf...so dont remove



