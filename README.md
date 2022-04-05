# Unit Testing and Behavior-Driven Development

Tests describe the expected behaviour of the application

Followed along here:
[Intro To JavaScript Unit Testing & BDD (2 Hour+ Course)](https://www.youtube.com/watch?v=u5cLK1UrFyQ&t=0s)

## Types of tests

### Unit testing
Writing tests that confirm an individual function or piece of code works

Basketball example: practicing drills like shooting, dribbling, passing separately

### Integration testing
When adding new code to pre-existing code to make sure that pieces run correctly individually and altogether without breaking

Basketball example: practicing drills like shooting, dribbling, passing with another player

### End-to-end testing
Run from start to finish with all the user stories you can think of

Basketball example: ready to play live against different opponents and different arenas

### BDD
Approach to testing, like creating a plan before you write your code

Write tests before code

### Red, Green, Refactor
- write tests first, knowing they will fail
- write the code that will pass the test
- improve the passing code
- repeat

## Tools

### [Chai](https://www.chaijs.com/)
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

Lots of expectation/assertion helpers.

### [Mocha](https://mochajs.org/)
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

(btw I'm  really glad tests can be delightful and fun)