// Ecrire une fonction qui retourne un objet avec le nombre de personnage 
// Masculin et le nombre de personnage Féminin

// Exemple de sortie : {male: 4, female: 3}

const users = [
    {
        name: "Eileen",
        gender: "F"
    },
    {
        name: "James",
        gender: "M"
    },
    {
        name: "John",
        gender: "M"
    },
    {
        name: "Marty",
        gender: "M"
    },
    {
        name: "Jane",
        gender: "F"
    },
    {
        name: "Leïa",
        gender: "F"
    },
    {
        name: "Luc",
        gender: "M"
    },
];


function comptGender (users){
let nbM = 0;
let nbF = 0;

for (let i = 0; i<users.length; i++){
     if (users[i].gender == "M"){
        nbM = nbM+1;
     }
     else if (users[i].gender == "F"){
        nbF = nbF+1;
     }
};

return resultat = { male: nbM,
                    female: nbF};
}

console.log (comptGender(users));