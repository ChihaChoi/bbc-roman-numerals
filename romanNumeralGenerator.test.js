const romanNumeralGenerator = require("./romanNumeralGenerator");

test("tests 4 -> IV", () => {
  expect(romanNumeralGenerator(4)).toBe("IV");
});
test("tests 278 -> CCLXXVIII", () => {
  expect(romanNumeralGenerator(278)).toBe("CCLXXVIII");
});
test("tests 2245 -> MMCCXLV", () => {
  expect(romanNumeralGenerator(2245)).toBe("MMCCXLV");
});
test("tests 3999 -> MMMCMXCIX", () => {
  expect(romanNumeralGenerator(3999)).toBe("MMMCMXCIX");
});
test("tests 5000 -> null", () => {
  expect(romanNumeralGenerator(5000)).toBe(null);
});
test("tests -20 -> null", () => {
  expect(romanNumeralGenerator(-20)).toBe(null);
});
test("tests 'string' -> NaN", () => {
  expect(romanNumeralGenerator("string")).toBe(NaN);
});
