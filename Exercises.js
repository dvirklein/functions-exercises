//Question 1
function myReverse(str) {
  let a = "";
  for (i = str.length - 1; i >= 0; i--) {
    a += str[i];
  }
  return a;
}

//Question 2
function allCombinations(str) {
  let combinations = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      combinations.push(str.slice(i, j + 1));
    }
  }
  return combinations;
}

//Question 3
function allCaps(str) {
  let sum = "";
  // your code here
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i - 1) === " " || i === 0) {
      sum += str.charAt(i).toUpperCase();
    } else {
      sum += str.charAt(i);
    }
  }
  return sum;
}

//Question 4
function myPower(x, n) {
  let z = 1;
  for (i = 0; i < n; i++) {
    z *= x;
  }
  return z;
}

//Question 5
function getFirstNotRepeating(str) {
  for (i = 0; i < str.length; i++) {
    let z = true;
    for (j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        z = true;
        break;
      } else if (str[i] !== str[j] && i !== j) {
        z = false;
      }
    }
    if (z === false) {
      return str[i];
    }
  }
  return "no kfiliot";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

//
// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
