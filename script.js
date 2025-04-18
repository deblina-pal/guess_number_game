const input = document.querySelector('.guess')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const allGuesses = document.querySelector('.all-guesses')
const submit_btn = document.querySelector('.submit')
const restart = document.querySelector('.restart')

const allGuessesArray = []

let random_no= Math.round(Math.random() * 100)

form.addEventListener('submit', (e) => 
{
    e.preventDefault()
    const userInput = parseInt(input.value)
    if(userInput < random_no)
    {
        result.innerText = 'too low!'
    }
    else if(userInput > random_no)
    {
        result.innerText = 'too high!'
    }
    else
    {
        result.innerText = 'You got it! Congrats'
        restart.disabled = false
        submit_btn.disabled = true
    }
    allGuessesArray.push(userInput)
    allGuesses.innerText = 'Your guesses: ' + allGuessesArray.join(',')
    form.reset()
})

restart.addEventListener('click', () => {
    allGuesses.innerText = ''
    result.innerText = ''
    restart.disabled = true
    submit_btn.disabled = false
    random_no= Math.round(Math.random() * 100)
    allGuessesArray.length = 0  
})