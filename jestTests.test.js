const jestTest = require('./src/jestTests.js');

test('log Hello World to the console', () => {
  expect(jestTest.helloWorld()).toBe('Hello World');
})

test('should add two numbers together', () => {
  expect(jestTest.sum(1, 1)).toBe(2);
})