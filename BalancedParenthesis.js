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

  var open = ['(', '[', '{'];
  var close = [')', ']', '}'];
  var tracker = [];

  for( var i = 0; i < string.length; i++ ) {
    if ( open.indexOf( string[i] ) >= 0 ) {
      tracker.push(string[i]);
    }
    if ( close.indexOf( string[i] ) >=0 ) {

    }

  }

}
