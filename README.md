# Hello World with Joke
This project demonstrates how to create a simple Hello World-ish project that will return a greeting according to a declared user name. The project also makes an HTTP call within its Activity to an external service that provides a joke on demand.

There is a default user named `Willard B. Wanamaker` declared. There is also a default Joke URL configured within the code. This URL returns a joke on demand.

The purpose of this project is to demonstrate how to setup a Temporal Activity, Workflow, Worker and calling Temporal calling Client. Also, the [Worfklow](https://github.com/reselbob/temporal-hello-world-with-joke/blob/main/src/workflows.ts) in the code is configured so that the Activity will be retried 10 times in the case of a failing call to the external HTTP site. 

## Running this sample

### Setting the optional environment variables

You can adjust the username and URL from where a joke is retrieved by configuring a set of optional environment variables using either a Bash `export` statement or by configuring a `.env` file in the root of this demonstration project's working directory.

The environment variables are:

* `USER_NAME`
* `JOKE_URL`

For example: 

```bash
USER_NAME=Orlando Chesney
JOKE_URL="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart
```

### Running the demonstration code:

1. Make sure Temporal Server is running locally (see the [quick install guide](https://docs.temporal.io/server/quick-install/)).
2. Execute `npm install` to install the dependencies.
3. Execute `npm run start.watch` to start the Worker.
4. In another shell, `sh ./run-example.sh` to run the Workflow using the Temporal.io Client.

The Workflow will return output similar to the following repeatedly: 

`Greetings, Willard B. Wanamaker! Here is a joke for you: What do you call a developer who doesn't comment code? A developer.`

To stop the output, strike `ctr+C`.
