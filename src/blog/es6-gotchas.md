---
title: ES6 and beyond. Gotchas (part 1)
date: 2020-05-02
excerpt: I am currently reading - You don’t know JS by Kyle Simpson. It’s a popular series of books in the world of web development
type: post
blog: true
tags:
    - Coding
---

![ES6 and beyond](https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451238966l/28276017.jpg)

I am currently reading - [You don't know JS](https://github.com/getify/You-Dont-Know-JS) by Kyle Simpson. It's a popular series of books in the world of web development. Now I'm on the book "ES6 and beyond", and I'm going to tell you about the moments that I found useful for myself.

![clean code meme](https://cdn-media-1.freecodecamp.org/images/0*q3-4kypImPD0VDPg.jpg)

## let & const



The author recommends declaring variables at the top of the block for better readability and so as not to run into a ReferenceError that occurs when you try to access a variable too early.
Exception is the `for` loop:
    
    var funcs = [];
        
    for (let i = 0; i < 5; i++) {
    	funcs.push( function(){
    		console.log( i );
    	} );
    }
    
    funcs[3]();		// 3

If in this example, the declaration of variable `i` is taken out of the loop, or declared using var, then the answer will be 5.

> The  `let i`  in the  `for`  header declares an  `i`  not just for the
> `for`  loop itself, but it redeclares a new  `i`  for each iteration
> of the loop. That means that closures created inside the loop
> iteration close over those per-iteration variables the way you'd
> expect.

---
Speaking of constants, the author criticizes the approach when all variables are declared via `const`, and if later it turns out that the variable should be overwritten, change it to `let`. This can lead to the fact that the `const` declaration will not be meaningful and any other developer will not think twice to rewrite the declaration as `let` when he needs it.  The author recommends to use `const` only when it is obvious that a variable should not be overwritten.

---
Another discovery for me was that functions in ES6 as well as `let` and `const` have block scope.

    {
		foo(); // works!

		function foo() {
			// ..
		}
	}
	foo(); // ReferenceError


##  Default value

The new assignment of a default value in ES6 seemed to me a simple syntactic sugar, so I hadn't paid much attention to it before.

    function foo(x = 11, y = 31) {
    	console.log( x + y );
    }

I used the operator  `||` when I had to assign a default value,.
But it turns out that this method has holes, and in ES5 it’s just not possible to set a default value that would cover all edge cases!

In addition, you can assign a default value during destructuring:

    let { x = 5 } = bar()


##  Destructuring
![destructuring meme](https://miro.medium.com/max/1240/1*TYifiOJXooG5bR6kXZmQEg.png)

This destructuring syntax looks familiar:

    function foo() {
    return {
    	first: 1,
    	second: 2
	    }
    }
    
    let { first, second } = foo()
    console.log(first, second) // 1 2

But what if we need to rename variables, for example for a shorter name? Then you need to remember that destructive assignment works as a mirror reflection to normal assignment:

    let { first: x , second: y } = foo()
    console.log(x, y) // 1 2

 Therefore if you need to switch the value of variables, you need to reflect them:

    let x = 1;
    let y = 2;
    
    [y , x] = [x , y]
    console.log(x, y) // 2 1
	

Also destructuring may be nested:

    let x = [1, [2, 3]]
    let [ a, [b, c] ] = x
    console.log(a, b, c)
    
And now in javascript there is an opportunity to name arguments to avoid inconvenience due to the strict sequence of their declaration: 

     function foo( { x, y } ) {
    	 console.log( x, y)
     }
     
    foo( { y: 1, x: 2} ) // 2 1

---
Here are only some notes of what I learned for myself. I recommend reading the book for more information, as Kyle Simpson explains stuff perfectly.