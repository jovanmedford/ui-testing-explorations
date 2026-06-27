# Test Runner and Assertion Library

Simplest testing set up. It just consists of the test runner and the assertion library.

Notice that the **describe** and **it** commands come from the test runner.
On the other hand assertions come from the assertion library which can be a part of a different project.

For example, a common paring is Mocha (test runner) and Chai (assertion library).

## Running The Test
To run the test, simply run:

```npm run test```

## Runtime Environment
This test runs in a node enivornment (despite the import syntax). In testing language this means that you won't have access to Browser API, but you would have access to other node specific features like file access.

## EcmaScript Module (ESM) Note
Notice that we used the **import/export** syntax for adding the function to the test script. 
This works because we specified the "type": "module" in the package.json.  