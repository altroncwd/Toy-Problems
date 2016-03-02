/* -----------------------------------------------------------------------------------------
-- FizzBuzz--
A classic problem, where our function is passed a number, if the number is divisiable by 3, it should log Fizz.  If the number is divisible by 5 then we log Buzz.  And in the case where its divisible by both 3 and 5, FizzBuzz. Any other number it shouldnt log anything.

-- Note --
This problem is a little to easy, so lets change one or two small things.
1.  the function can be passe in an array of numbers
2.  the function should return an array, with the responce of Fizz/Buzz/FizzBuzz corrisponding to the number passed.
  Ex: fizzBuzz([1,3,5,15])  // should return ['','Fizz', 'Buzz', 'FizzBuzz']
3.  Should still log the answer for every number.


-- Examples --
fizzBuzz(3)      //  ['Fizz']
fizzBuzz(5)      //  ['Buzz']
fizzBuzz(1)      //  ['']
fizzBuzz(15)     //  ['FizzBuzz']
fizzBuzz([3,5])  //  ['Fizz', 'Buzz']

----------------------------------------------------------------------------------------- */

var fizzBuzz = function (list) {
  var resultList = [];
  var result = function (inputNumber) {
    if (inputNumber % 3 === 0 && inputNumber % 5 === 0){ console.log('FizzBuzz'); return 'FizzBuzz'}
    if (inputNumber % 3 === 0){ console.log('Fizz'); return 'Fizz'}
    if (inputNumber % 5 === 0){ console.log('Buzz'); return 'Buzz'}
    else { console.log(''); return ''}
  };
  if (list instanceof Array){
    for (var i = 0; i <list.length; i ++) {
      resultList.push(result(list[i]));
    }
  }
  if (typeof(list)==='number'){
    resultList.push(result(list));
  }
  return resultList;
};
