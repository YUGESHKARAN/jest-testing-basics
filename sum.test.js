const {sum,display} = require('./sum') ;

test("properly adding two numbers", () => {
    expect(sum(1,2)).toBe(3) ;
    expect(display(2)).toBe(2)
})

