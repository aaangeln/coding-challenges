// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// MY  SOLUTION

function reverseWords(str) {
  const newArr = str.split(" ");
  const reversed = newArr.map((e) => {
    return e.split("").reverse().join("");
  });
  return reversed.join(" ");
}
