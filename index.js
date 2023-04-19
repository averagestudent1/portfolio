fetch("https://api.github.com/users/averagestudent1/events/public")
  .then(res => res.json())
  .then(res => {

    const section = document.createElement("section")
    res.forEach(githubEvent => {
      const div = document.createElement("div")
      div.innerHTML = `eventtype: ${githubEvent.type}`
      section.appendChild(div)
    });
    document.getElementById("githubresult").appendChild(section)
    console.log(res);
  })


//const fetch = require('node-fetch'); 

const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10';

const options = {
  method: 'POST',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json)
  }
  )
  .catch(err => console.error('error:' + err));


//test
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

// 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

// TODO 1. Fetch info from GIT
// TODO 2. Parse response
// TODO 3. Display an HTML template