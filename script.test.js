import { capitalize, calculator, reverseString, analyse } from "./script";

import getErrorMessage from "./script";

describe("getErrorMessage", () => {
  it("returns an error for a valid code", () => {
    expect(getErrorMessage(1)).toMatchSnapshot();
    expect(getErrorMessage(2)).toMatchSnapshot();
    expect(getErrorMessage(3)).toMatchSnapshot();
  });

  it("throws an error otherwise", () => {
    expect(() => getErrorMessage(4)).toThrowErrorMatchingSnapshot();
  });
});

test('Capitalize', () => {
    expect(capitalize('brady')).toContain('BRADY');
})

test('Reverse String', () => {
    expect(reverseString('haianh')).toMatch('hnaiah');
})

test('Calculator (+)', () => {
    expect(calculator(1,2,'plus')).toBe(3);
})

test('Calculator (-)', () => {
    expect(calculator(1,2,'minus')).toBe(-1);
})

test('Calculator (*)', () => {
    expect(calculator(1,2,'multiply')).toBe(2 * 1);
})

test('Calculator (/) with not raw result', () => {
    expect(calculator(1,2,'divide')).toBeCloseTo(0.5);
})

test('Calculator (/) with 0', () => {
    expect(calculator(1,0,'divide')).toBe("Can't divide 0");
})

it('Analyze array[]', () => {
  const obj = analyse([1, 8, 3, 4, 2, 6]);

  expect(obj).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});