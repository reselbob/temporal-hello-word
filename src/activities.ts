import axios from 'axios';
import {ApplicationFailure} from "@temporalio/workflow";

/**
 *
 * @param jokeUrl, the URL of the service that delivers the joke
 * @param name, the user name to greet alone with the joke
 */
export async function greetWithJoke(jokeUrl: string, name: string): Promise<string> {
  const url = jokeUrl;
  const config = {
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    }
  }
  console.log(`Getting a joke at URL, ${url} at ${Date.now()}`);
  //Go get a joke
  const response = await axios({
    url: url,
    method: 'get',
    headers: config.headers
  })

  // If a non-success status code is returned, through an application failure error
  if(response.status >= 300){
    console.error(`Cannot get joke at url ${url}`)
    throw ApplicationFailure.retryable (`Cannot get joke at url ${url}`);
  }
  console.log(`Got a joke at URL, ${response.data.setup} ${response.data.delivery} at ${Date.now()}`);
  //Convert the data in the JSON object into a single string
  const joke = `${response.data.setup} ${response.data.delivery} `
  return `Greetings, ${name}! Here is a joke for you: ${joke}`;
}


