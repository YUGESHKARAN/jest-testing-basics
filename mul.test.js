const mul = require('./mul') ;
test("properly multiply two numbers",() => {
    expect(mul(2,3)).toBe(6)
})