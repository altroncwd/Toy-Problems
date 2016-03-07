/* ------------------------------------------------------------------------------------------
-- Balanced Parenthesis --
passed in a string, this function should determine if the provided expression has valid ()/[]/{}.  The string can contain any number of leters and numbers.

-- Exampeles --
'(39285ajbl)'   // true
'[(({[[[]]]}))]'  // true
'[](0sfdg)'  // true
'[(])' // false
'{[([)]}]'  // false
']()' // false

------------------------------------------------------------------------------------------ */

var Balanced = function (string) {

  var open = ['(', '[', '{'];     // this is a list to make sure we can keep track of openings
  var close = [')', ']', '}'];    // this is a list to make sure we can keep track of closings
  var tracker = [];               // this is used to keep track of the order of opening/closing in the string

  for( var i = 0; i < string.length; i++ ) {    // we run through each character
    if ( open.indexOf( string[i] ) >= 0 ) {     // this first check will see if the character is in the opening list
      tracker.push(string[i]);                    // if it is we add it
    }
    if ( close.indexOf( string[i] ) >= 0 ) {    // this checks if its the closing list
      if (tracker.length === 0 ){                 // then we check if the list is even propogated
        return false;
      }
/* ---------------------------
    this might be more clever then understandable, but, we grab the last  value in our tracker array.
    and then we compair it, our string is in the closing index, indexOf will give us the index possition, we then use that index possition for the index possition of our open tags, because the corrisponding index possitions match.
    ( , ) index 0, [ , ] index 1, { , } index 2
    so if these match up with the tracker array, we know it was in there and then can remove it from out list
---------------------------  */
      if ( tracker[tracker.length-1] === open[ close.indexOf( string [i] )] ) {
        tracker.pop();
      } else {
        return false;  // if they open and close characters dont match up, we can simply return false
      }
    }
  }

//  this is a final check to make sure its balanced, if its balanced there should be nothing left in the array
  if (tracker.length === 0 ) {
    return true;
  } else {
    return false;
  }

}
