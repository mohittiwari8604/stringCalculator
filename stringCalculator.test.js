const calculate = require("./stringCalculator")


describe("Test suite for String Calculator",()=>{
    test("Should return 0 when empty string is passed",()=>{
        expect(calculate("")).toBe(0);
    })
    test("should return 6",()=>{
        expect(calculate("1,2,3")).toBe(6)
    })

    test("Should return number if only one number passed",()=>{
        expect(calculate("4")).toBe(4)
    })

    test("should ignore new line and return sum of numbers",()=>{
        expect(calculate("1\n2,3")).toBe(6)
    })
    test("should ignore all other characters which are not number and return sum",()=>{
        expect(calculate('//[***]\n1***2***3')).toBe(6);
    })

})