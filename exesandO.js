// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// MY SOLUTION

function XO(str) {
  const newArr = str.split("");
  const x = [];
  const o = [];
  newArr.forEach((e) => {
    if (e.toLowerCase() === "x") x.push(e);
    else if (e.toLowerCase() === "o") o.push(e);
  });
  if (x.length === o.length) return true;
  else {
    return false;
  }
}
