function isPalindrome (testableString = ''){
  testableString = testableString.replaceAll(' ', '').toLowerCase();
  let invertedString = '';
  for (let i = testableString.length - 1; i >= 0; i--){
    invertedString += testableString[i];
  }
  return (invertedString === testableString);
}

function extractNumbers (someInput = ''){
  let tempResult = '';
  let result = 0;

  for (let i = 0; i <= someInput.toString().length - 1; i++){
    if(!Number.isNaN(parseInt(someInput[i],10))){
      tempResult += parseInt(someInput[i],10);
    }
  }
  result = parseInt(tempResult,10);
  return result;
}

isPalindrome();
extractNumbers();

