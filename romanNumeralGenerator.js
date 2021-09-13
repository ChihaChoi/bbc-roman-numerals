function romanNumeralGenerator(num) {
  //return if incorrect arguments are passed
  if (typeof num != "number") {
    console.log("must pass a number");
    return NaN;
  } else if (num > 3999 || num < 1) {
    console.log("number must be between 1-3999");
    return null;
  }

  const numerals = [
    ["", "M", "MM", "MMM"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ];
  let array = num.toString().padStart(4, "0").split(""); //stringify the number, add leading 0s then make each digit an item in an array
  array = array.map((x) => parseInt(x)); //convert all the items back into numbers

  let output = "";
  array.forEach((value, digit) => {
    output = output + numerals[digit][value]; //get the corresponding roman numerals and add it onto the output
  });
  return output;
}
module.exports = romanNumeralGenerator;
