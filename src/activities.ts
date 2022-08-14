import axios from 'axios';

export async function greet(name: string): Promise<string> {
  //Hard code the URL to the external Joke API because the parsing logic
  //executed by the response need to accommodate the particular structure
  //of the JSON returned from the Joke API.
  const url = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart'
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
  console.log(`Got a joke at URL, ${response.data.setup} ${response.data.delivery} at ${Date.now()}`);
  //Convert the data in the JSON object into a single string
  const joke = `${response.data.setup} ${response.data.delivery} `
  return `Greetings, ${name}! Here is a joke for you: ${joke}`;
}


