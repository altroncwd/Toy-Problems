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

----------------------------------------------------------------------------- */
