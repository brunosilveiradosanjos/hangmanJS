class Hangman {
    constructor(word, attempts) {
        this.word = word.toLowerCase().split('');
        this.attempts = attempts;
        this.guessedLetters = [];
        this.status = 'playing';
    }

    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter == ' ') {
                puzzle += letter;
            } else {
                puzzle += '*'
            }

        })
        return puzzle;
    }

    get guessedLettersList() {
        return this.guessedLetters;
    }

    makeGuess(guess) {
        guess = guess.toLowerCase();
        if (this.status === 'playing') {
            if (!this.guessedLetters.includes(guess)) {
                this.guessedLetters.push(guess);
                if (!this.word.includes(guess)) {
                    this.attempts--
                }
            }
            this.getStatus();
        }
        return this.attempts
    }

    getStatus() {
        // only if every letter is from word is on guessedLetters will return true;
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter) || letter == ' ';
        })
        if (!this.attempts > 0) {
            this.status = 'failed';
        } else if (finished) {
            this.status = 'finished';
        } else {
            this.statu = 'playing';
        }
        return this.status;
    }

    get statusMessage() {
        let message = '';
        if (this.status === 'playing') {
            message = `Guesses left: ${this.attempts}`
        }
        else if (this.status === 'failed') {
            message = `Nice try, the word was : ${this.word.join('')}`
        }
        else if (this.status === 'finished') {
            message = `Great work, you guessed the word : ${this.word.join('')}`
        }
        return message;
    }
}