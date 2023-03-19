// Le Scenario:

// Créer un tableau initial avec 2 véhicules 
// Afficher le tableau 
// Ajouter 2 nouveaux véhicules 
// Afficher le tableau 
// Supprimer le véhicule a l’index 1
// Afficher le tableau 
// Trier le tableau par marques
// Afficher le tableau 

// Supprimer le dernier véhicule 
// Afficher le tableau 



// Les données:

// Tesla :Model y
// Renault : zoe
// Mustang  :mach-e
// Polestar :2

// Créer un tableau initial avec 2 véhicules 
let arrCars = [
{
    mark: "Tesla",
    model: "Mode_y"
},
{
    mark: "Renault",
    model: "zoe"
}];


function displayCars(){
    for (let i=0 ; i < arrCars.length ; i++) {  
        console.log ( `${arrCars[i].mark} ${arrCars[i].model}`);
    };
};

displayCars();

console.log("==================");

// Ajouter 2 nouveaux véhicules
arrCars.push ({
    mark: "Mustang",
    model: "mach-e"
},{
    mark: "Polestar",
    model: "2"
});

displayCars();

console.log("==================");

// Supprimer le véhicule a l’index 1
let firstCar = [arrCars.shift()];
let secondCars = arrCars.shift();
arrCars = firstCar.concat(arrCars);

displayCars();

console.log("==================");

// Trier le tableau par marques
function sortByMark( a, b )
{
    var x = a.mark; //.toLowerCase(); 
    var y = b.mark; //.toLowerCase(); 
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

arrCars.sort(sortByMark);

displayCars();

console.log("==================");

// Supprimer le dernier véhicule 
arrCars.pop();

displayCars();