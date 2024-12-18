const { soma }  = require('./soma');

test('1 + 2 is equal to 3', () => {
    expect(soma(1, 2)).toBe(3);
});
