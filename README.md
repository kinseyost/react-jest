# Testing in Jest
This demonstrates 2 important testing concepts
1. Snapshotting using enzyme's `shallow` function.
 * Before we were using the terribly verbose and difficult to maintain `toEqualJSX`
 ``` js
 expect(renderedContent).toEqualJSX(<SomeReallyLongJSXString />);
 ```
 * With Jest you can use
 ``` js
 expect(renderedContent).toMatchSnapshot();
 ```
 If your component changes, while the tests are running, look at the diff to
 make sure it's correct, and if so hit `u`.

2. Dependency injection using jest rather than rewire.
Rewire doesn't like it when you do this:
``` js
// file1.js
export const fun1 = () => { return 'stuff' };

// file2.js
export const fun2 = () => { return 'more stuff' };

// index.js
export * from './file1.js';
export * from './file2.js';
```

If you have a dependency that needs to be mocked, you can do so with
`jest.mock` very easily.
For instance
``` js
// file1.js
import dependency from 'dependency';
export const fun1 = () => { return dependency(); };
```

In your test, you can mock `dependency` like so
``` js
import { fun1 } from './file1.js';
jest.mock('dependency', () => () => 'I am the mocked dependency');

test('should overwrite the imported function', () => {
  const mockedReturn = fun1();
  expect(mockedReturn).toBe('I am the mocked dependency');
});
```
