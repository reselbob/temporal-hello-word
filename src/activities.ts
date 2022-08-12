import axios from 'axios';

// @@@SNIPSTART typescript-hello-activity
export async function greet(name: string): Promise<string> {
  const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart'
  const config = {
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json'
    }
  }
  console.log(`Getting a joke at URL, ${url} at ${Date.now()}`);
  const response = await axios({
    url: url,
    method: 'get',
    headers: config.headers
  })
  console.log(`Got a joke at URL, ${response.data.setup} ${response.data.delivery} at ${Date.now()}`);
  const joke = `${response.data.setup} ${response.data.delivery} `
  return `Greetings, ${name}! Here is a joke for you: ${joke}.`;
}
// @@@SNIPEND


