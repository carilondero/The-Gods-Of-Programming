//while
let contador = 0;
while(contador <3){
    console.log(contador);
    contador ++;
}
console.log("Fin del ciclo while")


//do while
let conteo = 0;
do {
    console.log(conteo);
    conteo ++;
} while (conteo < 3);
console.log("Fin del ciclo dowhile")

// for
for(let contando = 0; contando < 3; contando ++){
    console.log(contando); 
}
console.log("Fin del ciclo for")

//break

for(let contando = 0; contando <=10; contando++){
    if(contando % 2 == 0){
        console.log(contando); //muestra los pares
        break; // rompe y termina la busqueda
    }
}
console.log("Termina el ciclo al encontrar el primer numero par")

//continue y etiquetas labels
inicio: 
for(let contando = 0; contando <=10; contando++){
    if(contando % 2 !== 0){
       continue inicio;
    }
    console.log(contando)
}
console.log("Termina el ciclo ")


