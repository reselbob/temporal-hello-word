import * as wf from '@temporalio/workflow';
// Only import the activity types
import type * as activities from './activities';

const maximumAttempts = 10; //The number of times to retry

// Get the greetWithJoke activity function in order to make it
// available to the workflow.
const { greetWithJoke } = wf.proxyActivities<typeof activities>({
  //More info about startToCloseTimeout is here: https://docs.temporal.io/concepts/what-is-a-start-to-close-timeout/
  startToCloseTimeout: '4 seconds',
  retry: {
    backoffCoefficient: 1,
    maximumAttempts,
  }
});

// The workflow function that runs the activity, greetWithJoke
// once and returns the string created by the greetWithJoke function
export async function example(jokeUrl: string,name: string): Promise<string> {
  return await greetWithJoke(jokeUrl,name)
      .catch(e => {
        // Trap the activity failure and delivery a default name with a humorous message
        if(e instanceof wf.ActivityFailure){
          return `No joke for you ${name}. The call is failing and it's no joke!`
        }else{
          throw e;
        }
      });
}
