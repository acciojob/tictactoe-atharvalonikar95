//your JS code here. If required.
const startBtn=document.getElementById("start")
const playersDiv =document.getElementById("players")
const boardDiv =document.getElementById("game")
const message =document.getElementById("message")
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

startBtn.addEventListener("click", () => {
  // e.preventDefault()
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;

  if (!player1 || !player2) return alert("Enter both names");
 
  playersDiv.style.display = "none";
  boardDiv.style.display = "block";

  currentPlayer = player1;
  message.textContent = `${currentPlayer}, you're up`;
});

cells.forEach((cell,index)=>{
	cell.addEventListener('click',()=>{
		if(board[index]!=""||gameOver) return 
		if(currentPlayer==player1){
			  cell.textContent = "X";
		      board[index] = "X";
		}else{
			  cell.textContent = "0";
		      board[index] = "0";
		}
		if(checkWinner()){
			message.textContent = currentPlayer+" congratulations you won!"
			gameOver=true
			return
		}
		if (board.every(cell => cell !== "")) {
	      message.textContent = "It's a draw!";
	      gameOver = true;
	      return;
	    }
	currentPlayer = currentPlayer === player1 ? player2 : player1;
    message.textContent = `${currentPlayer}, you're up`;
	})
})
function checkWinner() { 
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6]          // diagonals
  ];

  return winPatterns.some(pattern => {
    const [a,b,c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}
