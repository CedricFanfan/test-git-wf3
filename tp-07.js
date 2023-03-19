// Ecrire une fonction qui compte le nombre d'une lettre definie dans une chaine

// exemple : countLetter("e", "Hello There !"); // 


function countLetter( searchCar, searchStr){

let nbCar =0;

for (let i = 0; i<searchStr.length; i++){
    if (searchStr[i] == searchCar){
           nbCar = nbCar+1;
    }
};
return nbCar;

};

console.log (countLetter("e", "Hello There !"));