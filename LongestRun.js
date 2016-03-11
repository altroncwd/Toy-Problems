/* -------------------------------------------------------------------------------------
-- Longest Run --
This function should take in a string, which will then track which letter is used the most consecutively.  The return should be an array containing the start index, and then end index. In the case that there are no letters repeated, it should return [0,0].

-- Example --
longestRun('abbcccb');  --> [3,5];
longestRun('abcdefg');  --> [0,0];
longestRun('aabb');     --> [0,1];

-- Note --
Keep in mind currently this solution does not take into account upper/lowercase letters.  Were the same letter to be used ( 'a' vs. 'A') the return in this case would be diffrent.  It also does not account for any other symbols where they would also be counted ('aaa****bbcc')  --> [3,6]
These would be simple problems to solve however the test cases are not including these and I will keep the solution simple.

------------------------------------------------------------------------------------- */

function longestRun (string) {
  // the basic problem is that we need to keep track of the possitions of where letters start/end
  // and we also need to keep track of the length
  // however we only need to keep track of them if they are long

  // we need some kind of container to keep track of out letter
  // tracker for the letter for comparison
  // tracker for the start
  // tracker for the end
  var longest = {
    letter: undefined,
    start: 0,
    end: 0
  };
  // but we also need a second set for the current itteration
  var current = {
    letter: undefined,
    start: undefined,
    size: 0
  };
  /* -- NOTE --
      We could have kept track of the end/start in an array format to start however I felt that using an object key was much more litteral and understandable.
  */


  // need a loop to go through the letters
  for (var i = 0; i < string.length; i++) {
    if (current.letter === string[i]) {   // simple check to see if we are encountering the same letter
      current.size++;
    }
    else {
      current.letter = string[i];         // if its a new letter we set all the parameters
      current.start = i;
      current.size = 1;                   // size must be set to 1, because the letter is obviously used at least once
    }

    if (current.size > 1) {               // we want this check to make sure only letters used more then once make it in
      if (longest.letter === undefined || current.size > (longest.end - longest.start+1)) {
      // this checks to see if we even have a value, if we do then it checks to see if the current letter is used more then the one listed as the longest.  If either is true we set the new longest
        longest.letter = current.letter;
        longest.start = current.start;
        longest.end = i;          // we have to always meke sure to set the end index just in case the next letter is not the same
      }
    }
  }

  return [longest.start, longest.end];  // now we just return the required format.

}
