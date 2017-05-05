import { countTo1, sayHello1Time } from './index.js';
jest.mock('./dependency', () => () => 'I am the mocked dependency');

test('should overwrite the imported function', () => {
  const mockedReturn = countTo1();
  expect(mockedReturn).toBe('I am the mocked dependency');
});

test('imported function from another module should be imported', () => {
  const nonMocked = sayHello1Time();
  expect(nonMocked).toBe('hello');
});
