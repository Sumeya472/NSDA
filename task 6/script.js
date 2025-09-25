let name = "Sumeya",
    age = 21,
    isGraduated = false,
    notDefined,
    emptyValue = null,
    uniqueSymbol = Symbol("User ID"),
    bigNumber = 4567387659;

[name, age, isGraduated, notDefined, emptyValue, uniqueSymbol, bigNumber].forEach(v => 
    console.log(v, "=>", typeof v)
);

var x = 2024; console.log("var x =", x);
let y = 2025; console.log("let y =", y);
const pi = 3.14; console.log("const pi =", pi);
