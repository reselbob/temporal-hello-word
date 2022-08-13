# Hello World

This is the default project that is scaffolded out when you run `npx @temporalio/create@latest ./myfolder`.

### Running this sample

1. Make sure Temporal Server is running locally (see the [quick install guide](https://docs.temporal.io/server/quick-install/)).
1. `npm install` to install dependencies.
1. `npm run start.watch` to start the Worker.
1. In another shell, `npm run workflow` to run the Workflow using the Temporal.io Client.

The Workflow will return output similar to the following: 

`Greetings, Willard B. Wanamaker! Here is a joke for you: What do you call a developer who doesn't comment code? A developer.`
