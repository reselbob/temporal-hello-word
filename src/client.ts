import { Connection, WorkflowClient } from '@temporalio/client';
import { example } from './workflows';
import { nanoid } from 'nanoid';

async function run() {
  //Connect to localhost with default ConnectionOptions.
  const connection = await Connection.connect({

  });

  const client = new WorkflowClient({
    connection,
  });

  const handle = await client.start(example, {
    args: ['Willard B. Wanamaker'], // pass the declared name into the workflow
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
