
let userAge=12;

if (userAge >= 18) {
    console.log ("L'utilisater est un adulte")
} else if (userAge >= 13) {
    console.log ("L'utilisater est un ado")
} else {
    console.log ("L'utilisater est un bébé")
}

// operateur ternaire
/*
let l = 42;
let m; // plus grand ou égal | plus petit

if ( l >= 50){
    m = "Plus grand ou égal";
} else {
    m= "Plus petit";
};

console.log (m);*/

let l = 42;
let m = l>= 50 ? "Plus grand ou égal" : "Plus petit";
console.log (m);
