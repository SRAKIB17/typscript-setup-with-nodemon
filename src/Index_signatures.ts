const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error

// nameAgeMap.Mark = "5345"; // Error: Type 'string' is not assignable to type 'number'.
nameAgeMap.rakib = 5543

console.log(nameAgeMap)
