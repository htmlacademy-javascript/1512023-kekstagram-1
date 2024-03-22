function isPalindrome (testableString = ''){
  testableString = testableString.replaceAll(' ', '').toLowerCase();
  let invertedString = '';
  for (let i = testableString.length - 1; i >= 0; i--){
    invertedString += testableString[i];
  }
  return (invertedString === testableString);
}

isPalindrome('топот');
