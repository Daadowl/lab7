let startBtn = document.getElementById('startBtn');
let Input = document.getElementById('Input');
let submitBtn = document.getElementById('submitBtn');

startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', submitGuess);

let y; 
let guess = 3; 

function startGame() {
    startBtn.style.display = 'none';
    Input.style.display = 'block';
    submitBtn.style.display = 'block';
    y = Math.floor(Math.random() * 10 + 1); 
}

function endGame() {
    guess = 3;
    startBtn.style.display = 'block';
    Input.style.display = 'none';
    submitBtn.style.display = 'none';
}

function submitGuess() {
    let x = parseInt(Input.value);

    if (isNaN(x) || x < 1 || x > 10) {
        alert('Пожалуйста, введите число от 1 до 10.');

    }
    if (x === y) {
        alert(`Вы угадали! Загаданное число: ${y} :)`);
        endGame();
    } else if (x > y && x <10) {
        guess--;
        alert(`Загаданное число меньше. Осталось попыток: ${guess}`);

    } else if (x < y) {
        guess--;
        alert(`Загаданное число больше. Осталось попыток: ${guess}`);
    }

    if (guess === 0) {
        alert(`Вы проиграли :( Загаданное число было: ${y} `);
        endGame();
    }
}
