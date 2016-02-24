/* -----------------------------------------------------------------
-- Binary Search Array --
Should be a function that takes in two parameters; an array, and a target value.
If the array does not contain the target value the function should return -1. If the array does contain the value the function should return the index of the value.

-- Note --
The function as implied, should search through the array in a binary fashion cutting the number of entries it mush search in half each time.

-- Example --
binarySearch([1,2,3,4,5,6,7,8,9,10], 2)  ==> 1
binarySearch([1,2,3,4,5,6,7,8,9,10], 8)  ==> 7
binarySearch([1,2,3,4,5,6,7,8,9,10], 32)  ==> -1

-----------------------------------------------------------------*/

function binarySearch (array, target) {

  var recursiveCall = function (startIndex, endIndex) {
    // here we just do some basic math to find half point between our start and end
    // but we also have to preserve the index, so we have to add the startIndex to this each time
    var half = Math.floor((endIndex - startIndex)/2 + startIndex);

    // easy case, if we find the target we return the index, which is "half"
    if (array[half] == target) {
        return half;
    }

    // we check the value of the current index vs our target
    if (array[half] > target) {
        // in this case the value was grater then the target, but wait
        // if the value is greater, and the index was 0: aka the first,  it cant be in our array
        if (half === 0) {return -1}
        // otherwise we need to call the function again, passing it the same starting index, and half as the end
        return recursiveCall(startIndex, half);
    }

    // same as above  ^
    if (array[half] < target) {
        if ( half === array.length-1) {return -1}
        return recursiveCall(half, endIndex);
    }
  };

  // here we call the function for the first time, giving it the starting point of 0, and the length
  return recursiveCall(0, array.length);

}
