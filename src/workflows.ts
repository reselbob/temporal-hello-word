// @@@SNIPSTART typescript-hello-workflow
//import { proxyActivities } from '@temporalio/workflow';
import * as wf from '@temporalio/workflow';
import { sleep } from "@temporalio/workflow";
// Only import the activity types
import type * as activities from './activities';

const { greet } = wf.proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

// A workflow function that returns a string
export async function example(name: string): Promise<string> {
  return await greet(name);
}
