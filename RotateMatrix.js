/* ------------------------------------------------------------------------------------------------------------------
-- Rotate Matrix --
The function will be passed in a matrix array, and you need to return a matrix rotated 90 degrees. The arrays should be able to hold any type of value

-- Example --
rotateMatrix([                          [
  [1,2,3],          -- should return-->   [7,4,1]
  [4,5,6],                                [8,5,2]
  [7,8,9]                                 [9,6,3]
]);                                     ]

rotateMatrix [ [1,2], [3,4] ];         --> [ [3,1], [4,2] ]

------------------------------------------------------------------------------------------------------------------ */
function rotateMatrix (matrix) {

 var turnMatrix = [];

 //need to go backwards through the rows, and then grab each of the x index an push it to a new array
 for(var j = 0; j <matrix.length; j++){
   var temp = [];
   for(var i = matrix.length-1; i >= 0 ; i--){
     temp.push(matrix[i][j]);
   }
   turnMatrix.push(temp);
 }

 // matrix needs to be rotated 90*
 return turnMatrix;
}

/*

The best way to understand this problem and how the logic works is by write out a few test values, and then the rotated value.
TestValue1 = [ [1,2], [3,4] ]

TestValue2 = [ [1,2,3], [4,5,6], [7,8,9] ]

Now the rotated matrix as we normaly preceive it
    [ 1, 2 ]    --rotated-->  [ 3, 1 ]
    [ 3, 4 ]                  [ 4, 2 ]

    [1, 2, 3]   --rotated-->  [7, 4, 1]
    [4, 5, 6]                 [8, 5, 2]
    [7, 8, 9]                 [9, 6, 3]
Now looking properly, we notices that every row, is grabbing all the same values in the same columb but diffrent rows.
and its grabbing the value from the last first, so if we go backwards starting from the last, grab every same index value of those rows and put them into a new array, we can make a new array that is the rotated matrix.

*/
