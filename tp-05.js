// Ecrire une fonction permettant de générere un mot de passe
// inspiré de : https://stackoverflow.com/questions/1497481/javascript-password-generator

// Les paramètres à prendre en entré sont:
// - Longueur du mot de passe finale (number)
// - Integration des majuscules (bool)
// - Integration des nombre de 0 à 9 (bool)
// - Integration des caractères spéciaux ($=+;.!-_§|) (bool)

// Exemple d'utilisation: 
//generatePassword(16, true, true, false);

function generatePassword( lenghtPwd, maj, numb, spChar) {
    var length = lenghtPwd;
    var charset = "abcdefghijklmnopqrstuvwxyz";
    var retVal ="";    

    if (maj) { charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"};

    if (numb) { charset = charset + "0123456789"}

    // if (spChar) { charset = charset + "\$\=\+\;\.\!\-\_\§\|"}
    if (spChar) { charset = charset + "$=+;.!-_§|" };
   
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

console.log (generatePassword(16, true, true, false));