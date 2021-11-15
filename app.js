

let userText = prompt('quel accessoire utilisez vous : souris, clavier, ordinateur, tapis, imprimante, ondulateur');
let paragraphe = document.getElementById('paragraphe');

switch(userText) {

    case 'souris':
        alert("J'utilise une souris");
        break;

    case 'clavier':
        alert("j'utilise un clavier");
        break;

    case 'ordinateur':
        alert("j'utilise un ordinateur");
        break;

    case 'tapis':
        alert("j'utilise un tapis");
        break;

    case 'imprimante':
        alert("j'utilise une imprimante");
        break;

    case 'ondulateur':
        alert("j'utilise un ondulateur");
        break;

    default :
        alert("l'accessoire que vous utilisez est inconnu")
}