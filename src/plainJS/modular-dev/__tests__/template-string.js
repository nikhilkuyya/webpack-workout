test("template string working and output", () => {
  const str = "i am value of n :";
  const n = 1;
  const res = `${str} ${n}`;
  const expected = "".concat(str, " ", n);
  console.log(expected);
  expect(res).toBe(expected);
});

describe("template fn", () => {
  test("calling fn with template string : template function", () => {
    function tag(...args) {
      return args;
    }
    const whom = "Guys";
    const name = "Nikhil";
    console.log(tag`Hi ${whom} my Name is ${name}`);
    const expected = JSON.stringify([whom, name]);
    const output = JSON.stringify(tag`Hi ${whom} my Name is ${name}`.slice(1));
    expect(output).toMatch(expected);
  });
});
