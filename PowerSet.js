/* ---------------------------------------------------------------------------
-- Power Set --
This function should take in a string, and then should return you all the possible combinations in alphabetical order with no repeats including an empty string.

 -- NOTE --
 A combination using the same letters even in an diffrent order will be considered a repeat.  'ab' === 'ba'

 -- Example --
powerSet('a');   --> ['', 'a']
powerSet('ba');  --> ['', 'a', 'ab']
powerSet('html'); --> ["", "h", "hl", "hlm", "hlmt", "hlt", "hm", "hmt", "ht", "l", "lm", "lmt", "lt", "m", "mt", "t"]
--------------------------------------------------------------------------- */
function powerSet (string) {
  // i need make an array list so i can sort it and remove duplicates
  var list = [];
  for(var i = 0; i < string.length; i++) {
    if(list.indexOf(string[i]) === -1 ) { // here i'm using index to only push values not contained in the list.  you could always use reduce later, but i prefer this method
      list.push(string[i]);
    }
  }

  list.sort();  // obviously we need to sort the list before we do more work

  var combinations = [''];

  // this function will make a standard for loop, but it starts where you you tell it too, and will call itself with the next index as the next starting point.  this way we get all the combinations after a letter is used without repeates.  We need to push before we recurse to have proper order
  var startToFinish = function (currentString, start) {
      for( var j = start; j < list.length; j++) {
          combinations.push(currentString + list[j]);
          if (j < list.length){
              startToFinish(currentString + list[j], j+1);
          }
      }
  };

  startToFinish('',0);
  return combinations;

}
