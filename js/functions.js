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
  if (someInput.length >= maxLength) {
    return someInput;
  }
  const lengthToAdd = maxLength - someInput.length;
  if (additionalSymbols.length === lengthToAdd) {
    return additionalSymbols + someInput;
  }
  if (additionalSymbols.length > lengthToAdd) {
    const difference = additionalSymbols.length - lengthToAdd;
    console.log(difference);
    console.log(additionalSymbols.slice(0,difference - 1));
    return additionalSymbols.slice(0, additionalSymbols.length - difference) + someInput;
  }

}

isPalindrome();
extractNumbers();
compareLength();
completeStringAtBegin();
