/* -----------------------------------------------------------------
-- DeepEquality --
In this problem our function will be given two items of any kind.  our function should tell us if they are deeply equal without using JSON.stringify().  Test cases will always be given two parameters and should return true if they are deeplky equal, else they should return false.

-- Example --
deepEquality( 1, 1 );   --> true;
deepEquality( 1, '1' );   --> false;
deepEquality( { foo: 1, b: { c: 3 } }, { foo: 1, b: { c: 3 } }); --> true;
deepEquality( { foo: 'bar', biz: 'baz' }, { foo:'bar' }); --> false;

-----------------------------------------------------------------*/
