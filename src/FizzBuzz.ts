// FizzBuzz.ts
exports.fizzBuzz = (n: number) => {
    const list = []

    for(let i = 1; i <= n; i++) {
        let str = i.toString()

        if (i % 3 == 0) str = "Fizz"
        if (i % 5 == 0) str = "Buzz"
        if (i % 15 == 0) str = "FizzBuzz"

        list.push(str)
    }

    return list
}