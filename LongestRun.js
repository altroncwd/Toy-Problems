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

