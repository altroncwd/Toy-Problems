/* ---------------------------------------------------------------------------
-- Bubble Sort --
One of the most basic forms of sorting through an array, where you compaire the current value with the next value and rearrange them into the proper order.

The purpose it write your own implemntation that uses these same principles.  The function itself will take in an array list and should return a sorted list.

-- Examples --

bubbleSort([6,2,4,7,457,4,3]);    --> [2,3,4,4,6,7,457]
bubbleSort([1,-1,6,3]);           --> [-1,1,3,6]

--------------------------------------------------------------------------- */
var bubbleSort = function(array) {
  var bubbleUp = function() {   // create a funciton to call
    var flag = true;            // set a marker so i'll know if everything is in order, default should be set to true, any changes to the array will cause it to turn false
    for (var i = 0; i < array.length-1; i++){  // we want to make sure we stop eary, or we will end up compairing an undefined value
      if(array[i]>array[i+1]){                // simply checks the values
        var temp = array[i+1];                    // if the value was greater, we will swtich the values around and set the flag to false
        array[i+1] = array[i];
        array[i] = temp;
        flag = false;
      }
    }

    if(flag===false){   // at the end we check, if at any poit the array was changed we need to go through again to make sure its in order
      bubbleUp();
    }
  };
  bubbleUp();  // invoke the actual function
  return array;   // now that we've returned from out bubbleUp(), we know the array is in order
};
