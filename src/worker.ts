import { Worker } from '@temporalio/worker';
import * as activities from './activities';

async function run() {

  // First, register Workflows and Activities with the Worker that connects to
  // and interacts with the Temporal server.
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: 'hello-world-with-joke',
  });

  // Next, start accepting tasks on the `hello-world-with-joke` queue
  await worker.run();
}

// Set up error handling behavior
run().catch((err) => {
  console.error(err);
  process.exit(1);
});

