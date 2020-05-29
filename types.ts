enum Role {
    ADMIN = 5,
    READ_ONLY, // = 6
    AUTHOR, // = 7
}

const person: {
    name: string;
    age: number;
    hobbies: any[];
    activities: string[];
    tuple: [number, string],
    role: number,
    anything: any,
} = {
    name: 'Alex', // String
    age: 32, // Number
    hobbies: ['Sports', 1], //Array any
    activities: ['this', 'and', 'that'], // Array string
    tuple: [2, 'Eggs'], //Tuple
    role: Role.AUTHOR, //Enum
    anything: 'Fuckery' //Any type
}

for(const hobby of person.hobbies) {
    console.log(hobby)
}

console.log(person.role)