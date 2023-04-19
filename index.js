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

