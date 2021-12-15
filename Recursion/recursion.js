const countDown = (num) => {
  if (num <= 0) {
    console.log("we are done");
  } else {
    console.log(num);
    num--;
    countDown(num);
  }
};

const factorial = (num) => {
  let result = num;
  if (num > 1) {
    result = num * factorial(num - 1);
  }
  return result;
};

const fibo = (num) => {
  if (num <= 1) return num;
  return fibo(num - 1) + fibo(num - 2);
};

//mimicing the Math.pow() function
const power = (base, exponent) => {
  if (exponent == 0) return 1;
  if (exponent == 1) return base;
  return base * power(base, exponent - 1);
};
power(2, 4);

const productofArray = (arr) => {
  if (arr.length == 0) {
    return 1;
  }
  return arr[0] * productofArray(arr.slice(1));
};

const recursiveRange = (n) => {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
};

/// pascal triangle

const pascalTriangle = (row, col) => {
  if (col === 0) {
    return 1;
  } else if (row === 0) {
    return 0;
  } else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
};

///convert decimal into binary numbers
const baseToString = (n) => {
  let binaryString = "";
  const baseToSringHelper = (n) => {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      baseToSringHelper(Math.floor(n / 2));
      baseToSringHelper(n % 2);
    }
  };
  baseToSringHelper(n);
  return binaryString;
};

///printing all permutaion of an array
const swap = (strArr, index1, index2) => {
  var temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
};
const permute = (strArr, begin, end) => {
  if (begin === end) {
    console.log(strArr);
  } else {
    for (let i = begin; i < end + 1; i++) {
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      swap(strArr, begin, i);
    }
  }
};
const permuteArray = (strArr) => {
  permute(strArr, 0, strArr.lenght - 1);
};
