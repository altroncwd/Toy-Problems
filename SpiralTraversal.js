/* --------------------------------------------------------------------------------------------------------------
-- Spiral Traversal --
This function should take in a matrix array of any size, and should return a sinle list in spiral order, starting from the top left going clockwise.  This function should not mutate the matrix argument.

-- Example --
spiralTraveral([1,2,3],[4,5,6],[7,8,9]);    -output-> [1,2,3,6,9,8,7,4,5];
spiralTraveral([ [ 1, 2, 3, 4, 5 ],
                 [ 6, 7, 8, 9, 10 ],
                 [ 11, 12, 13, 14, 15 ],
                 [ 16, 17, 18, 19, 20 ],
                 [ 21, 22, 23, 24, 25 ] ]);
           -output-> [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]

-------------------------------------------------------------------------------------------------------------- */

function spiralTraversal (matrix) {
  var map = matrix.slice();     // we make a copy
  var list = [];                // make our list to return later
  var loop = function(){        // our function to recurse over
    list = list.concat(map.shift());                        // here we simply take the whole first array that retains its order
    if(map.length > 0 && map[0][0] !== undefined){          // here we have to check to make sure there is any more left to work on
        for (var i = 0; i < map.length; i++) {                // if there is we itterate through the remaining length of the copy
            list = list.concat(map[i].pop());                   // we pop off the last in each row, adding that to our list
        }
        if (map[map.length-1][0] !== undefined) {             // again we have to make sure, that we still have values to work on
            list = list.concat(map.pop().reverse());            // if we do, we know there is a full list at the bottom, so we take that whole list and reverse its
            for (var j = map.length-1; j >= 0; j--) {         // here we go back up the matrix
                list = list.concat(map[j].shift());             //  removing the first item in the lists
            }
            if(map.length > 0){                             // here if the length of the copy is still more then 0, we recall the function
                loop();                                     // our check at the begining and middle make sure we dont push undefined/null values
            }
        }
    }
  };

  loop();                               // invoke the function
  return list;                          // return the list :D
}
