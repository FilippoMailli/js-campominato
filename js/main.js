/*
- Generare 16 numeri casuali compresi tra 1 e 100 senza ripetizioni


*/

var numeroMinato;
var numeriMinati = [];
var i;
var x;
var counter;

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

for (var i = 0; i < numeriMinati.length; i++) {
    console.log(numeriMinati[i]);
}
