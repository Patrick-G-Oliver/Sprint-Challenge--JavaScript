# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between .forEach and .map is that the former (.forEach) iterates over the items in an array (which are then acted upon by the function provided to .forEach), while the latter (.map) not only iterates over each array item (again acted upon by a provided function), but also produces a new array from the results (leaving the original array intact and unchanged).

2. What is the difference between a function and a method?

While both functions and methods are functions, methods are functions that are also object properties (i.e. a function that appears on an object), while functions exist independently, able to be accessed without reference to an object.

3. What is closure?

Closure, or a closure, is the combination of a function and a record of all the variables that are within the lexical scope of that function when it is declared. For example, in the case of a nested fucntion (i.e. a function declared within the internal scope of another function), the fact that the nested function is a closure (as are all functions, even when declared in the global scope) gives it access to any variables within the the outer, parent function's local scope (as well as variables that exist in scopes outside the parent fucntion, up to and including the global scope). This means that a function returned by a function retains access to all the variables contained within its parent function (or functions). 

4. Describe the four rules of the 'this' keyword.

1) Window/Global Object Binding: Since the ‘this’ keyword points to the context in which it appears, when the ‘this’ keyword is called in the global scope it points to the window (i.e. the entire browser environment in which JS is run) because that is where the function containing ‘this’ is being run.
2) Implicit Binding: When an object method is called (e.g. myObj.add1(2); ), the object appearing to the left of the dot (in the example, myObj) is the referent of the ‘this’ keyword when it appears within the object method.
3) New Binding: In this case the ‘this’ keyword appears on the property creators of a constructor function and refers to the new objects (each new object individually) that will be created by the constructor function. 
4) Explicit Binding: Here the .call or .apply function directs the ‘this’ keyword to refer to an object that is substituted for the content of an original object (assigning the ‘this’ keyword’s referent explicitly).

5. Why do we need super() in an extended class?

super() refers and grants access to the parent constructor’s properties. Without super() the extended class would have no way to import those properties and would effectively have to act as an independent class.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
