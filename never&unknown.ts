let userInput: unknown
let userName: string


userInput = 5
userInput = 'Max'

typeof userInput === 'string' && (userName = userInput)

function generateError(message: string, code: number): never { //Never returns anything
    throw {message: message, errorCode: code}
}

generateError('An error occured!', 500)