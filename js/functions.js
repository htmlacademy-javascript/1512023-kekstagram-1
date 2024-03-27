const isPalindrome = (string) => {
  string = String(string).toLowerCase().replace(/\s/g,'').split('');
  return string.join('') === string.reverse().join('');
};

const extractNumbers = (input) => {
  if(!String(input).match(/\d/)){
    return NaN;
  }

  if(typeof(input) === 'number') {
    return Math.abs(input);
  }
  input = input.replace(/\D/g, '');
  return Number(input);
};

const extractNumbersSecond = (input) => {
  input = String(input).replace(/\D/g, '');
  return parseInt(input, 10);
};

const compareLength = (string, maxLength) => String(string).length <= maxLength;

function completeStringAtBegin (someInput = '', maxLength = 1, additionalSymbols = '') {

  const lengthToAdd = maxLength - someInput.length;

  if (someInput.length >= maxLength) {
    return someInput;
  }

  if (additionalSymbols.length === lengthToAdd) {
    return additionalSymbols + someInput;
  }

  if (additionalSymbols.length > lengthToAdd) {

    const difference = additionalSymbols.length - lengthToAdd;

    return additionalSymbols.slice(0, additionalSymbols.length - difference) + someInput;
  }

  if (additionalSymbols.length < lengthToAdd) {

    if(!(lengthToAdd % additionalSymbols.length)){
      return (additionalSymbols).repeat(lengthToAdd) + someInput;
    }

    let partialStr = '';
    const repeatIntegerTimes = lengthToAdd / additionalSymbols.length;
    const repeatRestIndexes = lengthToAdd % additionalSymbols.length;

    for (let i = 0; i <= repeatRestIndexes - 1; i++){
      partialStr += additionalSymbols[i];
    }

    return partialStr + (additionalSymbols).repeat(repeatIntegerTimes) + someInput;

  }

}

isPalindrome();
extractNumbers();
compareLength();
completeStringAtBegin();
extractNumbersSecond();
