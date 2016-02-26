/* -----------------------------------------------------------------------------------------------------
-- Sum Array --
Sum array should be a function that takes in an array and calculates the greatest contiguous sum of numbers in it. A single array item will count as a contiguous sum.

-- Examples --

sumArray ([ 1, 2, 3 ]);               --> 6
sumArray ([ 4, -1, 5 ]);              --> 8
sumArray ([ 10, -11, 11 ]);           --> 11
sumArray ([ 1, 2, 3, -6, 4, 5, 6 ]);  --> 15
sumArray ([ -5,-5,-5,2,3]);           --> 5

This toy problem is slightly confusing as the parameters and tests were rather vauge.  Although this passes all the origonal test casese given, it might not properly solve the problem in other test cases.

------------------------------------------------------------------------------------------------------ */

function sumArray (array) {
  var greatest = null;
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    if (sum > 0 && array[i]<0 && sum - array[i] < 0){
      sum = 0;
    }
    else if (sum < 0 && array[i] > sum) {
      sum = array[i];
    }else {
      sum += array[i];
    }
    if (greatest === null || sum > greatest) {
      greatest = sum;
    }
  }
  return greatest;
}
