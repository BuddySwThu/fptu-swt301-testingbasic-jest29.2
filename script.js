export {reverseString, calculator, analyse, capitalize};

// error-message.js
export default function getErrorMessage(code) {
  if (code === 1) {
    return 'The dog walks on a leg';
  }
  else if (code === 2) {
    return 'Cats dont eat mouses';
  }
  else if (code === 3) {
    return 'The Car dont run';
  }

  throw new Error('No error messages for that code')
}

const capitalize  = (string) => {
    return string.toUpperCase();
}

const reverseString = (string) => {
    let newString = "";

    for(let i = string.length - 1; i >= 0; i--)
        newString += string[i];
    
    return newString;
}

const calculator = (num1, num2, method) => {
    switch(method) {
        case 'plus' : {
            return num1 + num2;
          //  break;
        }
        case 'minus' : {
            return num1 - num2;
          //  break;
        }
        case 'multiply' : {
            return num1 * num2;
          //  break;
        }
        case 'divide' : {
            return num2 === 0 ? "Can't divide 0" : num1 / num2;
           // break;
        }
    }
};

const analyse = (arr) => {
  const obj = {};

  const average = arr => {
    const len = arr.length;
    const total = arr.reduce((acc, cur) => acc + cur);

    return total / len;
  };

  const min = arr => Math.min(...arr);
  const max = arr => Math.max(...arr);
  const length = arr => arr.length;

  obj.average = average(arr);
  obj.min = min(arr);
  obj.max = max(arr);
  obj.length = length(arr);

  return obj;
};