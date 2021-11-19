
// Document Elements
const button = document.querySelector("#button");
const jokeText = document.querySelector(".joke-text");

// Button onClickListener
button.addEventListener('click', () => {
    getDadJoke();
});

// Get joke function
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    let joke = res.data.joke;
    jokeText.innerHTML = joke;
}