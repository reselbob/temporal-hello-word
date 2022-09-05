import * as wf from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

// Get the greetWithJoke activity function in order to make it
// available to the workflow.
const { greetWithJoke } = wf.proxyActivities<typeof activities>({
  startToCloseTimeout: '4 seconds', //the timeout period for task execution. More info here: https://docs.temporal.io/concepts/what-is-a-start-to-close-timeout/
  retry: {
    backoffCoefficient: 1,
    maximumAttempts: 10, //The number of time to retry
  }
});

// The workflow function that runs the activity, greetWithJoke
// once and returns the string created by the greetWithJoke function
export async function example(jokeUrl: string,name: string): Promise<string> {
  return await greetWithJoke(jokeUrl,name);
}
