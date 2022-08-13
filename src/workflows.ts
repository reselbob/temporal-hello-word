// @@@SNIPSTART typescript-hello-workflow
import { proxyActivities } from '@temporalio/workflow';
import { sleep } from "@temporalio/workflow";
// Only import the activity types
import type * as activities from './activities';

const { greet } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

/** A workflow that calls an activity to times every 2 seconds*/
export async function example(name: string): Promise<void> {
  let cnt = 0;
  while (cnt < 10) {
    await greet(name);
    cnt++;
    await sleep('2s');
  }
  return;
}
