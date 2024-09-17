const sub = require('./sub') ;

test("peroperly subtracting two numbers", ()=> {
    expect(sub(1,2)).toBe(-1)
})