const jokes = [
  {
    q: 'What do you call a very small valentine?',
    a: 'A valen-tiny!',
  },
  {
    q: 'What did the dog say when he rubbed his tail on the sandpaper?',
    a: 'Ruff, Ruff!',
  },
  {
    q: "Why don't sharks like to eat clowns?",
    a: 'Because they taste funny!',
  },
  {
    q: 'What did the boy cat say to the girl cat?',
    a: "You're Purr-fect!",
  },
  {
    q: "What is a frog's favorite outdoor sport?",
    a: 'Fly Fishing!',
  },
  {
    q: 'I hate jokes about German sausages.',
    a: 'Theyre the wurst.',
  },
  {
    q: 'Did you hear about the cheese factory that exploded in France?',
    a: 'There was nothing left but de Brie.',
  },
  {
    q: 'Our wedding was so beautiful',
    a: 'Even the cake was in tiers.',
  },
  {
    q: 'Is this pool safe for diving?',
    a: 'It deep ends.',
  },
  {
    q: 'Dad, can you put my shoes on?',
    a: 'I dont think theyll fit me.',
  },
];

// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
const getRandomJoke = (limit = 1) => {
  let limit2 = Number(limit);
  limit2 = !limit2 ? 1 : limit2;
  limit2 = limit2 < 1 ? 1 : limit2;
  let number = 0;
  const max = 10;
  const responseObj = [];
  for (let i = 0; i < limit2; i += 1) {
    number = Math.floor(Math.random() * max);
    responseObj.push({
      question: jokes[number].q,
      answer: jokes[number].a,
    });
  }
  return JSON.stringify(responseObj);
};

const getRandomJokeResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(getRandomJoke(params.limit));
  response.end();
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;
