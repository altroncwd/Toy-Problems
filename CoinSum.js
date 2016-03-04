/* ------------------------------------------------------------------------------------
-- Coin Sum --
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation
1p
2p
5p
10p
20p
50p
£1 (100p)
£2 (200p)

Given a given number of pence, return the possible number of ways someone could make change.
It is possible to make 5 pence in the following ways:

5 * 1p
3 * 1p + 1 * 2p
1 * 1p + 2 * 2p
1 * 5p

In other words, find all the possible combinations of coins that sum to a given pence value.

-- examples --
coinSums(5);   -> 4
coinSums(1);   -> 1
coniSums(17);  -> 28

-- Note --
This was a rather difficult problem for me to understand anget my head around.  In the end I required help to get this question.  The key in this solution with the way I understand it is the fact that you recursivly go down through the possible pense, and only after you return from one state, do you subtract from your total.
The problem with this function is obviously you go through every possible itteration and and your sum can go negative.  If you wanted to make this function slightly costly you could return in any case where the sum is less then 0, that way you'll never itterate through further combinations past that.

Thank you Elliot for you help on this one.  OTL

If at first you dont succeed... and you keep trying, stop.... STOP, JUST STOP FOR NOW.  you'll understand later...

------------------------------------------------------------------------------------ */

var coins = [1,2,5,10,20,50,100,200];
function coinSums (total) {
  var sums = 0;  // this is for keeping track of all the possibilities
  function innerRecursion(recurseIndex, leftover){
    var current = coins[recurseIndex];

    if (recurseIndex === 0){
      if (leftover % current === 0){
        sums++;
      }
      return;
    }
    while (leftover >= 0){
      innerRecursion(recurseIndex - 1, leftover);
      leftover -= current;
    }
  }
  innerRecursion(coins.length - 1, total);
  return sums;
}
