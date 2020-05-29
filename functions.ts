function add(n1: number, n2: number) {
    return n1 + n2
}

// Function that does not return a value
function printResult(num: number): void {
    console.log('Result ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

let combineValues: (n1: number, n2: number) => number

combineValues = add
console.log(combineValues(8, 8))

printResult(add(5, 12))

addAndHandle(5, 10, (result) => {
    console.log(result)
})