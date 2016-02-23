/* ------------------------------------------------------------------------------
-- Compose --
Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

-> Example <-
var greet = function(name){ return 'hi: ' + name;}
var exclaim = function(statement) { return statement.toUpperCase() + '!';}

var welcome = compose(greet, exclaim);
welcome('phillip'); //=> 'hi: PHILLIP!'



-- Pipe --
Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.

-> Example <-
var add2 = function(number){ return number + 2; }
var multiplyBy3 = function(number){ return number * 3; }

pipe(add2, multiplyBy3)(5) //=> 21
pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63

-- NOTE --
You can also use native JS functions like reduce() and reduceRight() if you so feel inclined
------------------------------------------------------------------------------ */



var compose = function(){
 // compose is passed any number of functions
 var listOfFuncs = Array.prototype.slice.call(arguments, this);
 // -- This should give me an array list of any and all arguments passed to compose
 // returns a function that calls on the return val of the functions
 return function ( arg ) {
  for( var i = listOfFuncs.length-1; i >= 0; i-- ){
    arg = listOfFuncs[i](arg);
  }
  return arg;
 }
};

var pipe = function(){
  var listOfFuncs = Array.prototype.slice.call(arguments, this);
  return function ( arg ) {
    for( var i = 0; i < listOfFuncs.length; i++ ){
      arg = listOfFuncs[i](arg);
    }
  return arg;
 }
};
