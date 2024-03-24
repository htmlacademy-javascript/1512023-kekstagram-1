function isPalindrome (testableString = ''){
  testableString = testableString.replaceAll(' ', '').toLowerCase();
  let invertedString = '';
  for (let i = testableString.length - 1; i >= 0; i--){
    invertedString += testableString[i];
  }
  return (invertedString === testableString);
}

function extractNumbers (someInput = ''){

  if(!Number.isNaN(someInput)){
    someInput = someInput.toString();
  }
  let tempResult = '';
  let result = 0;

  for (let i = 0; i <= someInput.length - 1; i++){
    if(!Number.isNaN(parseInt(someInput[i],10))){
      tempResult += parseInt(someInput[i],10);
    }
  }
  result = parseInt(tempResult,10);
  return result;
}

function compareLength (someInput = '', maxLength = 1) {
  return someInput.length <= maxLength;
}

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
