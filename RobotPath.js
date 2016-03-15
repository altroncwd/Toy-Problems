/* -----------------------------------------------------------------------------
-- Robot Path --
I like to think of this problem more as a snake path but thats irrelevent.
The problem is to find all possible paths a robot can take without walking where it has been prior.  If you think of it like a board, your robot can never walk on the same space in order to get to the goal.

The function should take in a number, which will determine the size of the board.  The robot will aways start in the top left corner of the board, and the goal will always be the bottom right corner.  This function should return the number of possible paths the robot can take.

robotPaths(1);  // 1
robotPaths(2);  // 2
robotPaths(3);  // 12
robotPaths(4);  // 184

-- Note --
Its recomended not to go over 6, as this will take a while...

> I really like this problem because it reminds me of what you might do for an AI in a game of some sorts.  But it can be slightly challenging, always double check your math.

----------------------------------------------------------------------------- */

function robotPaths (n) {
  var makeBoard = function () {
      var board = [];
      for (var i = 0; i < n; i++) {
          var row = [];
          for (var j = 0; j < n; j++) {
            row.push(0);
          }
          board.push(row);
      }
      return board;
  };

  var solutionCount = 0;
  var paths = function (board, row, column) {   // ---- function start

    board[row][column] = 1;  // "set" peice;
    // console.log(board[0]);
    // console.log(board[1], "at : ", row, column);
    // console.log(board[2]);
    // console.log('----------------------------');
    if (row === n-1 && column === n-1) {

      // NOTE : although you could check for your goal before placing down a "marker", when you do find your goal these console logs will print you a small map to see the path.  It helps to keep track of where you are on the "board". currently set for an argument of a 3x3 board

        // console.log('ATARI');  // you win...
        // console.log('----------------------------');
        solutionCount++;
        board[row][column] = 0;
        return;
    }

    if ( row+1 < n  && board[row+1][column] === 0) {    // going "down"
        paths(board, row+1, column);
    }
    if (column+1 < n && board[row][column+1] === 0) {   // going "right"
        paths(board, row, column+1);
    }
    if (row-1 >= 0 && board[row-1][column] === 0) {     // going "up"
        paths(board, row-1, column);
    }
    if (column-1 >= 0 && board[row][column-1] === 0) {  // going "left"
        paths(board, row, column-1);
    }

    board[row][column] = 0;  // "remove" peice for the next itteration

  };                                            // ---- function End

  paths( makeBoard(), 0, 0);
  return solutionCount;

}
