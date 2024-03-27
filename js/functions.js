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

const padStart = (string, length, template) => {
  string = String(string);
  template = String(template);
  if (string.length >= length) {
    return string;
  }

  while (string.length < length) {
    if (string.length + template.length > length) {
      return template.slice(0, Math.abs(string.length - length)) + string;
    }
    string = template + string;
  }
  return string;
};

isPalindrome();
extractNumbers();
compareLength();
padStart();
extractNumbersSecond();
