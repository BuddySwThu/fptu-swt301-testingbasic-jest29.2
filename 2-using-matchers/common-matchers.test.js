test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    data['three'] = 3;
    expect(data).toEqual({ one: 1, two: 2, three: 3 });
});

test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 5; a++) {
        for (let b = 1; b < 5; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});