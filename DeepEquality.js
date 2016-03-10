/* -----------------------------------------------------------------
-- DeepEquality --
In this problem our function will be given two items of any kind.  our function should tell us if they are deeply equal without using JSON.stringify().  Test cases will always be given two parameters and should return true if they are deeplky equal, else they should return false.

-- Example --
deepEquality( 1, 1 );   --> true;
deepEquality( 1, '1' );   --> false;
deepEquality( { foo: 1, b: { c: 3 } }, { foo: 1, b: { c: 3 } }); --> true;
deepEquality( { foo: 'bar', biz: 'baz' }, { foo:'bar' }); --> false;

-----------------------------------------------------------------*/

deepEquals = function(a, b){
  // at the most simple level I need to compare the items and see if they are the same
  // however the item could be an array, or an object, or a nested array, ex...
  // I need to make this funciton reusable, because we will need to do recursion in order to check every value
  // lets start one value at a time. tyes strings/boolans/numerals
  if (typeof(a) !== typeof(b)) {return false}
  if (typeof(a) === 'string' && typeof(b) === 'string') {   //<-- note because of the first if check, its unnessisary to make sure both arguments are the same type, however I will keep it there for the sake of clarity
    if (a !== b) {return false;}
  }
  if (typeof(a) === 'number' && typeof(b) === 'number') {
    if (a !== b) {return false;}
  }
  if (typeof(a) === 'boolean' && typeof(b) === 'boolean') {
    if (a !== b) {return false;}
  }
  // now lets go with arrays
  if (a instanceof Array && b instanceof Array) {
    if (a.length !== b.length) {return false}
    for (var i = 0; i<a.length; i++) {
      if(deepEquals(a[i], b[i]) === false) {return false}
    }
  }

  // now we go with objects
  if (a instanceof Object && b instanceof Object) {
    for (var keys in a) {
      if (b[keys] === undefined) {return false}
      if (deepEquals(a[keys], b[keys]) === false) { return false}
    }
    for (var bkeys in b) {    // this second key loop, is to make sure that keys from b are also in a, so we only have to check if they are there, and not any values as they were already checked with keys from a
      if (a[bkeys] === undefined) { return false}
    }
  }

  return true;

};
