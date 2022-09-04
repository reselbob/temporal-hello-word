# Hello World

This is the default project that is scaffolded out when you run `npx @temporalio/create@latest ./myfolder`.

### Running this sample

#### Setting the optional environment variables

You can adjust the user name and URL from where joke are retrieved by configuring a set of optional environment variables using either a Bash `export` statement or by configuring a `.env` file in the root of this demonstration project's working directory.

The environment variables are:

* `USER_NAME`
* `JOKE_URL`

For example: 

```bash
USER_NAME=Orlando Chesney
JOKE_URL="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart
```

#### Running the demonstration code:

1. Make sure Temporal Server is running locally (see the [quick install guide](https://docs.temporal.io/server/quick-install/)).
2. Execute `npm install` to install the dependencies.
3. Execute `npm run start.watch` to start the Worker.
4. In another shell, `npm run workflow-from-client` to run the Workflow using the Temporal.io Client.

The Workflow will return output similar to the following repeatedly: 

`Greetings, Willard B. Wanamaker! Here is a joke for you: What do you call a developer who doesn't comment code? A developer.`

To stop the output, strike `ctr+C`.