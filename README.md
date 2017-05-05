# Testing in Jest
This demonstrates 2 important testing concepts
1. Snapshotting using enzyme's `shallow` function.
 * Before we were using the terribly verbose and difficult to maintain `toEqualJSX`
 ```
 expect(renderedContent).toEqualJSX(<SomeReallyLongJSXString />);
 ```
 * With Jest you can use
 ```
 expect(renderedContent).toMatchSnapshot();
 ```
 If your component changes, while the tests are running, look at the diff to
 make sure it's correct, and if so hit `u`.
