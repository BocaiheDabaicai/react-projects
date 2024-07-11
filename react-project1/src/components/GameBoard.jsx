const initialGameBoard = [
    [undefined, 'X', 'O'],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
]

export default function GameBoard() {
    return <ol id="game-board">
        {initialGameBoard.map((gameBoard, index) => <li key={index}>
            <ol>{gameBoard.map((item, iIndex) => <li key={iIndex}>
                <button>{item}</button>
            </li>)}</ol>
        </li>)}
    </ol>
}