let currentPlayer = 'queso';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', function () {
        const index = this.dataset.index;

        if (gameBoard[index] !== '') return;

        // Aquí es donde ponemos el emoji:
        gameBoard[index] = currentPlayer;
        this.textContent = currentPlayer === 'queso' ? '🧀' : '🐭';

        if (checkWinner()) {
            setTimeout(() => {
                alert(`${currentPlayer === 'queso' ? 'Queso' : 'Ratón'} gana!`);
                resetGame();
            }, 10);
        } else {
            currentPlayer = currentPlayer === 'queso' ? 'ratón' : 'queso';
        }
    });
});

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'queso';
}