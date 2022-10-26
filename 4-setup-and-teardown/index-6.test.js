//To run only one test with Jest, temporarily change that 'test' command to a 'test.only'

let globalVariable = "A";

test.only("first test", () => {
  expect(globalVariable).toBe("A");
  globalVariable = "B";
});

test("second test", () => {
    expect(globalVariable).toBe("A");
});

test("third test", () => {
    expect(globalVariable).toBe("A");
});

test.only("fourth test", () => {
    expect(globalVariable).toBe("B");
});