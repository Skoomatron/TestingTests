const helloWorld = require('./src/helloworld.js');

test('log Hello World to the console', () => {
  expect(helloWorld()).toBe('Hello World');
})