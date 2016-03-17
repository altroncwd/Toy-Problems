/* ----------------------------------------------------------------------------
-- Roman Numerals --
Given a string this function should return the roman numerical value.  In the case that a non roman numeral string is passed in the function should return 'null'

-- Examples --
// ("XVI")   --> 16;
// ("XIV")   --> 14;
// ("XAV")   --> 'null';

---------------------------------------------------------------------------- */
// Provided Helper
var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

// End of helpers -----------------------------------------------------------

function translateRomanNumeral (romanNumeral) {
  var currentValue = 0;
  var lastValue;
  for (var i = 0; i < romanNumeral.length; i++) {
    if (DIGIT_VALUES[romanNumeral[i]] === undefined) {  // here at any point we run into a non roman numeral, we break out of the function returning 'null'
      return 'null';
    }
    if (DIGIT_VALUES[romanNumeral[i]] > lastValue) {
      // at this step we need to make sure to remove the last value twice, as it was added initialy in the last itteration
      currentValue += (DIGIT_VALUES[romanNumeral[i]] - lastValue * 2);
    } else {
      // here we simply add to the current value
      currentValue += DIGIT_VALUES[romanNumeral[i]];
    }
    // and now we update the last value
    lastValue = DIGIT_VALUES[romanNumeral[i]];
  }

  return currentValue;

}
