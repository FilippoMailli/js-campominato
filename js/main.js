/*
- Generare 16 numeri casuali compresi tra 1 e 100 senza ripetizioni
- L'utente sceglie a che difficoltà giocare

*/

var numeroMinato;
var numeriMinati = [];
var i;
var x;
var y = 1;
var counter;
var count1 = 0;
var errore = 0;
var numero;



var difficolta = prompt('Scegli a che difficoltà giocare (0, 1, 2): ');
switch (difficolta) {


    case '0':
        for(i = 0; i < 16; i++){
            counter = 0;
            numeroMinato = Math.floor(Math.random() * 100) + 1;
            for(x = i; x >= 0; x--) {
                if(numeroMinato == numeriMinati[x]){
                    counter = counter + 1 ;
                }
                else{
                    conter = 0;
                }
            }
            if(counter > 0) {
                i--;
            }
            else{
                numeriMinati[i] = numeroMinato;
            }
            x--;
        }

        for (i = 0; i < numeriMinati.length; i++) {
            console.log(numeriMinati[i]);
        }
        for(y = 0; y < 84; y++) {
            numero = prompt('Scegli un numero tra 1 e 100: ');
            for(i = 0; i < numeriMinati.length; i++){
                if(numero == numeriMinati[i]){
                    errore ++;
                }
            }
            if(errore != 0){
                console.log('Hai sbagliato!');
                break;
            }
            else{
                count1++;
            }
        }
        if (count1 > 0 && count1 < 84) {
            console.log('Hai evitato le mine ' + count1 + ' volte');
        }
        else if (count1 == 84){
            console.log('Hai vinto!');
        }
        else {
            console.log('Hai perso senza beccarne una giusta!');
        }
        break;


    case '1':
        for(i = 0; i < 16; i++){
            counter = 0;
            numeroMinato = Math.floor(Math.random() * 80) + 1;
            for(x = i; x >= 0; x--) {
                if(numeroMinato == numeriMinati[x]){
                    counter = counter + 1 ;
                }
                else{
                    conter = 0;
                }
            }
            if(counter > 0) {
                i--;
            }
            else{
                numeriMinati[i] = numeroMinato;
            }
            x--;
        }

        for (i = 0; i < numeriMinati.length; i++) {
            console.log(numeriMinati[i]);
        }
        for(y = 0; y < 64; y++) {
            numero = prompt('Scegli un numero tra 1 e 80: ');
            for(i = 0; i < numeriMinati.length; i++){
                if(numero == numeriMinati[i]){
                    errore ++;
                }
            }
            if(errore != 0){
                console.log('Hai sbagliato!');
                break;
            }
            else{
                count1++;
            }
        }
        if (count1 > 0 && count1 < 64) {
            console.log('Hai evitato le mine ' + count1 + ' volte');
        }
        else if (count1 == 64){
            console.log('Hai vinto!');
        }
        else {
            console.log('Hai perso senza beccarne una giusta!');
        }
        break;


    case '2':
    for(i = 0; i < 16; i++){
        counter = 0;
        numeroMinato = Math.floor(Math.random() * 50) + 1;
        for(x = i; x >= 0; x--) {
            if(numeroMinato == numeriMinati[x]){
                counter = counter + 1 ;
            }
            else{
                conter = 0;
            }
        }
        if(counter > 0) {
            i--;
        }
        else{
            numeriMinati[i] = numeroMinato;
        }
        x--;
    }

    for (i = 0; i < numeriMinati.length; i++) {
        console.log(numeriMinati[i]);
    }
    for(y = 0; y < 34; y++) {
        numero = prompt('Scegli un numero tra 1 e 50: ');
        for(i = 0; i < numeriMinati.length; i++){
            if(numero == numeriMinati[i]){
                errore ++;
            }
        }
        if(errore != 0){
            console.log('Hai sbagliato!');
            break;
        }
        else{
            count1++;
        }
    }
    if (count1 > 0 && count1 < 34) {
        console.log('Hai evitato le mine ' + count1 + ' volte');
    }
    else if (count1 == 34){
        console.log('Hai vinto!');
    }
    else {
        console.log('Hai perso senza beccarne una giusta!');
    }
    break;

    
    default:
    alert('Opzione non valida, fai refresh e ritenta!');
    }
