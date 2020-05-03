const calculator = require("./calculator");

/******check sum */
test("sums two numbers",()=>{
    expect(calculator.sum(2,3)).toBe(5);
});

test("sums many numbers",()=>{
    expect(calculator.sum(2,3,1,1,1)).toBe(8);
});
test("sums an array and a number",()=>{
    expect(calculator.sum(2,3,[1,2,3,4])).toBe(15);
});
test("sums the arrays",()=>{
    expect(calculator.sum([2,3,4,5],[2,3,4,5])).toBe(28);
})

/*check dfference */
test("subtracts two numbers",()=>{
    expect(calculator.subtract(2,3)).toBe(-1);
})
/******check multiply */

/********check divison */
