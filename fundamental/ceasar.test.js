import ceaser from './ceasar';

it('this crypt a string and decrypt the same string as expected by an offset of + 1 or -1 respectively', () => {
    const myCeaser = ceaser();

    expect(myCeaser.crypt('abcd')).toBe('bcde');
    expect(myCeaser.decrypt('bcde')).toBe('abcd');
});