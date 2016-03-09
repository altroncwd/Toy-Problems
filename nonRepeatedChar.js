/* -----------------------------------------------------------------
-- Non-Repeated Character --
You should give the function a string, and the function will give you the first non repeated letter in that word.  If there is no letter that is not repeated the function should return "sorry"

-- Note --
This solution did not take into account the diffrence between upper and lowercase letters as the origonal test cases did not cover this sittuation.  With this solution an input of 'baBa' would return 'b', and in reality it should return 'sorry' as a b and B are the same letter.

-- Example --
firstNonRepeatedCharacter('xxxxx');   // sorry
firstNonRepeatedCharacter('abcdabc');   // d
firstNonRepeatedCharacter('ALAMABA');   // L
firstNonRepeatedCharacter('BaBa');   // sorry

-----------------------------------------------------------------*/
