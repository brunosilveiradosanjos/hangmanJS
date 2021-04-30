const attempts = 10;
const puzzleEl = document.querySelector('#puzzle');
const attemptsEl = document.querySelector('#attempts');
const guessesEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress', (e) => {
    game1.makeGuess(e.key);
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.guessedLettersList
    attemptsEl.textContent = game1.statusMessage;

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle()
    game1 = new Hangman(puzzle, attempts)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()