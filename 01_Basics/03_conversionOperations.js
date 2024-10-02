let score  = undefined


console.log(score);
console.log(typeof(score))

let inNumber = Number(score)

console.log(inNumber);

console.log(typeof(inNumber))


// number => number
// "33abd" => nummber  , type  =  NaN
// null => number , 0
// undefined => number , Type  = NaN

                             // BOOLEAN CONVERSION
let isBool = undefined

let isBoolean = Boolean(isBool)
console.log(isBoolean);

// 1 => true, 0 => false
// ""=> false, 
// "Alks"=> true 
// null => false
//undefined => false

//                     STRING CONVERSION

let str = 3434

let inString = String(str)
console.log(inString)
console.log(typeof(inString));


// number => String
// null => null(String)
// undefined => undefined(String)
// boolean => true(String)