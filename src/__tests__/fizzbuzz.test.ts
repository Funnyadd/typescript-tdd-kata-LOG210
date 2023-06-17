// fizzBuzz.test.ts
const FizzBuzz = require('../FizzBuzz')

describe('FizzBuzz tdd test', () => {

    it('When number is equal to 3 it should return ["1","2","Fizz"]', () => {
        const fizzBuzz = FizzBuzz.fizzBuzz(3)
        checkFizz(fizzBuzz)
    })

    it('When number is equal to 5 it should return ["1","2","Fizz","4","Buzz"]', () => {
        const fizzBuzz = FizzBuzz.fizzBuzz(5)
        checkBuzz(fizzBuzz)
    })

    it('When number is equal to 15 it should return ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]', () => {
        const fizzBuzz = FizzBuzz.fizzBuzz(15)
        checkFizzBuzz(fizzBuzz)
    })
})

const checkFizz = (fizzBuzz: Array<number>) => {
    expect(fizzBuzz[0]).toEqual("1")
    expect(fizzBuzz[1]).toEqual("2")
    expect(fizzBuzz[2]).toEqual("Fizz")
}

const checkBuzz = (fizzBuzz: Array<number>) => {
    checkFizz(fizzBuzz)
    expect(fizzBuzz[3]).toEqual("4")
    expect(fizzBuzz[4]).toEqual("Buzz")
}

const checkFizzBuzz = (fizzBuzz: Array<number>) => {
    checkFizz(fizzBuzz)
    checkBuzz(fizzBuzz)
    expect(fizzBuzz[5]).toEqual("Fizz")
    expect(fizzBuzz[6]).toEqual("7")
    expect(fizzBuzz[7]).toEqual("8")
    expect(fizzBuzz[8]).toEqual("Fizz")
    expect(fizzBuzz[9]).toEqual("Buzz")
    expect(fizzBuzz[10]).toEqual("11")
    expect(fizzBuzz[11]).toEqual("Fizz")
    expect(fizzBuzz[12]).toEqual("13")
    expect(fizzBuzz[13]).toEqual("14")
    expect(fizzBuzz[14]).toEqual("FizzBuzz")
}
