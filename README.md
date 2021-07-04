# Description
Over an intermission during the frontend program at Turing, I took some time to familiarize myself with Express GraphQL and do the beginners tutorial [here](https://graphql.org/graphql-js/). This is the repo I created to follow along and study and [here](https://gist.github.com/RMartin0717/dd088a9590a8f1dc94944f52956d52dc) is the link to a reflection about the experience.


# Installation
1. Clone down this repository
2. Run ```npm install```
3. Run the server by entering ```node server/server.js``` in the command line
4. Go to http://localhost:4000/graphql in your browser

#### To make a request in the browser, use the following format, with any root written in the server.js within the curly braces

```
{
  hello
}
```

#### To make a request in the dev tools console, use the following format, with any query or mutation defined in the body of the fetch call

```
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: "{ hello }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```
