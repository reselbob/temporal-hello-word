import * as wf from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

// Get the greet activity function in order to make it
// available to the workflow
const { greet } = wf.proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

// The workflow function that runs the activity, greet
// once and returns the string created by the greet function
export async function example(name: string): Promise<string> {
  return await greet(name);
}
