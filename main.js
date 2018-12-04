//main.jss
//JavaScript for tic-Tac-Toe game

//board img vars
var topLeft, topMid, topRight;
var centerLeft, centerMid, centerRight;
var bottomLeft, bottomMid, bottomRight;
var board=[[0,0,0],[0,0,0],[0,0,0]];//set to 1 after a player selects tile

//player var
var currentPlayer = "X";//set the current player to X, switches every turn
//switch the img to indicate current player
var playerXTurn = document.querySelector("#playerXTurnImg");
var playerOTurn;
var playerOTurn = document.querySelector("#playerOTurnImg");

//add DOM objects to board img vars
topLeft = document.querySelector("#topLeftImg");
topMid = document.querySelector("#topMidImg");
topRight = document.querySelector("#topRightImg");

centerLeft = document.querySelector("#centerLeftImg");
centerMid = document.querySelector("#centerMidImg");
centerRight = document.querySelector("#centerRightImg");

bottomLeft = document.querySelector("#bottomLeftImg");
bottomMid = document.querySelector("#bottomMidImg");
bottomRight = document.querySelector("#bottomRightImg");

//addEventListener "click" to vars
topLeft.addEventListener("click", function(){
	if( board[0][0] === 0){
		if( currentPlayer === "X"){//playerX turn
			topLeft.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			topLeft.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[0][0] = 1;
	}
});
topMid.addEventListener("click", function(){
	if( board[0][1] === 0){
		if( currentPlayer === "X"){//playerX turn
			topMid.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			topMid.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[0][1] = 1;
	}
});
topRight.addEventListener("click", function(){
	if( board[0][2] === 0){
		if( currentPlayer === "X"){//playerX turn
			topRight.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			topRight.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[0][2] = 1;
	}
});
centerLeft.addEventListener("click", function(){
	if( board[1][0] === 0){
		if( currentPlayer === "X"){//playerX turn
			centerLeft.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			centerLeft.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[1][0] = 1;
	}
});
centerMid.addEventListener("click", function(){
	if( board[1][1] === 0){
		if( currentPlayer === "X"){//playerX turn
			centerMid.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			centerMid.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[1][1] = 1;
	}
});
centerRight.addEventListener("click", function(){
	if( board[1][2] === 0){
		if( currentPlayer === "X"){//playerX turn
			centerRight.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			centerRight.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[1][2] = 1;
	}
});
bottomLeft.addEventListener("click", function(){
	if( board[2][0] === 0){
		if( currentPlayer === "X"){//playerX turn
			bottomLeft.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			bottomLeft.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[2][0] = 1;
	}
});
bottomMid.addEventListener("click", function(){
	if( board[2][1] === 0){
		if( currentPlayer === "X"){//playerX turn
			bottomMid.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			bottomMid.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[2][1] = 1;
	}
});
bottomRight.addEventListener("click", function(){
	if( board[2][2] === 0){
		if( currentPlayer === "X"){//playerX turn
			bottomRight.src = "letterX.png";
			currentPlayer = "O";
			playerXTurn.src = "blankSquare.png";
			playerOTurn.src = "blackSquare.png";
		}else{//playerO turn
			bottomRight.src = "letterO.png";
			currentPlayer = "X";
			playerXTurn.src = "blackSquare.png";
			playerOTurn.src = "blankSquare.png";
		}
		board[2][2] = 1;
	}
});
