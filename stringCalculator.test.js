const calculate = require("./stringCalculator")


describe("Test suite for String Calculator",()=>{
    test("Should return 0 when empty string is passed",()=>{
        expect(calculate("")).toBe(0);
    })
})