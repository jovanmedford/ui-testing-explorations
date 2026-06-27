# DOM Environment

In this example we add the ability to perform tests similar to how testEnvironment: "jsdom" would behave.

The goal is to add another ingredient to the test runner + assertion library set up.

## Running The Test
To run the test, simply run:

```npm run test```

## Runtime Environment
This example aims to show how testEnvironment: "jsdom" behaves. However, it's still just a node enivronment even though we've added jsdom. 
While jest and vitest only allow one testEnvironment per file - our handmade example does not go so far in creating that separation.
So this means we could still access the file system like normal if we tried.

## EcmaScript Module (ESM) Note
Notice that we used the **import/export** syntax for adding the function to the test script. 
This works because we specified the "type": "module" in the package.json.  