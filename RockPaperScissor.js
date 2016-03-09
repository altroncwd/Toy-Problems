/*--------------------------------------------------------------------------------------------
-- Rock Paper Scissor --
Given a number of rounds n, return an array of all the possible rock-paper-scissors play possibilities for that number of rounds.

-- NOTE --
We are trying to practice our recursion here

-- Example --
rockPaperPermutation(2);
  --> [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
rockPaperPermutation(1);
  --> [ "r", "p", "s" ];
rockPaperPermutation(1);
  --> [];

--------------------------------------------------------------------------------------------*/
function rockPaperPermutation (roundCount) {
  if(roundCount === 0){ return [];}

  var rps = ['r','p','s'];
  var baseCase = ['r','p','s'];

  var runThrough = function(count){
    if(count===0){return}
    var newArray = [];
    for(var i = 0; i < rps.length; i++){
      for(var j = 0; j < baseCase.length; j++){
        newArray.push(rps[i]+baseCase[j])
      }
    }
    rps = newArray;
    if(count>0){
        runThrough(count-1);
    }
  }
  runThrough(roundCount-1);

  return rps;
}

// -------------- Slight diffrent solutions -----------------

var rockPaperScissor = function (rounds) {
  if (rounds === 0) {
    return [];
  }
  var startingList = ['r', 'p', 'c'];

  var combinations = function (list) {
    rounds--;
    var newList = [];
    for( var i = 0; i < list.length; i++) {
        for( var j = 0; j < startingList.length; j++) {
            newList.push(list[i] + startingList[j]);
        }
    }
    if(rounds > 0) {
        return combinations(newList);
    } else {
        return newList;
    }
  };
  return combinations(['']);
};
