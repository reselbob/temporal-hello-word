import * as wf from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const { greet } = wf.proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

// A workflow function that runs once and returns a string
export async function example(name: string): Promise<string> {
  return await greet(name);
}
