const {
    describe,
    it,
    expect,
    add,
    subtract,
    multiply,
    divide
} = require('./index')

describe('Testing', () => {    
    describe('adding two numbers', () =>{
        let result = add(1,2)
        it('adds the given numbers', () => {
            expect(result).toBe(3)
        })
        it('should fail when expecting a wrong result', () => {
            expect(result).toBe(1)
        })
    })
    describe('subtracting two numbers', () =>{
        let result = subtract(3,2)
        it('subtracts the given numbers', () => {
            expect(result).toBe(1)
        })
        it('should fail when expecting a wrong result', () => {
            expect(result).toBe(5)
        })
    })
    describe('multiplying two numbers', () =>{
        let result = multiply(3,2)
        it('multiplies the given numbers', () => {
            expect(result).toBe(6)
        })
        it('should fail when expecting a wrong result', () => {
            expect(result).toBe(5)
        })
    })
    describe('dividing two numbers', () =>{
        let result = divide(8,2)
        it('divides the given numbers', () => {
            expect(result).toBe(4)
        })
        it('should fail when expecting a wrong result', () => {
            expect(result).toBe(5)
        })
    })

})
