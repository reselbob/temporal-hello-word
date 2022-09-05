import { Connection, WorkflowClient } from '@temporalio/client';
import { example } from './workflows';
import { nanoid } from 'nanoid';
import path from "path";
// dotenv looks for the existence of a .env file that has env var settings.
// if no .env file exists, dotenv look for the environment variables in memory
require('dotenv').config({ path: path.join(__dirname, '../', '.env') })

async function run() {
  //Connect to localhost with default ConnectionOptions.
  const connection = await Connection.connect({});

  const client = new WorkflowClient({
    connection,
  });
  // set the default values for jokeUrl and name
  const jokeUrl = process.env.JOKE_URL || 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart'
  const name = process.env.USER_NAME || 'Willard B. Wanamaker'
  const handle = await client.start(example, {
    args: [jokeUrl, name], // pass the declared URL and name into the workflow
    taskQueue: 'hello-world-with-joke',
    // create a workflowId to make the workflow identifiable within the Temporal
    // server
    workflowId: 'workflow-' + nanoid(),
  });
  console.log(`Started workflow ${handle.workflowId}`);

  console.log(await handle.result());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
