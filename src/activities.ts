import axios from 'axios';

// @@@SNIPSTART typescript-hello-activity
export async function greet(name: string): Promise<string> {

  const url = 'https://icanhazdadjoke.com/';
  console.log(`Getting a joke at URL, ${url} at ${Date.now()}`);
  const response = await axios.get(url);
  console.log(`Got a joke at URL, ${response.data} at ${Date.now()}`);

  return `Greetings, ${name}! Here is a joke for you: ${response.data}.`;
}
// @@@SNIPEND


