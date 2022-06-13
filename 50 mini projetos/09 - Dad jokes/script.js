const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click', () =>
{
    const config = 
    {
        headers:
        {
            'Accept': 'application/json'
        }
    }

    const url = fetch('https://icanhazdadjoke.com/', config)

    url.then(r => r.json())
        .then(jsonBody => 
            {
                jokeEl.innerText = jsonBody.joke
            })
})

