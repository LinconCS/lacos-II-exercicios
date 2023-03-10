const paisesMaisPopulosos = ['China', 'Índia', 'EUA', 'Indonésia', 'Paquistão', 'Brasil']

// function rankingArray(array) {
//     console.log(array);
//     let i = 1;
//     for (const pais of paisesMaisPopulosos) {
//         console.log(`${i}º país mais populoso do mundo - ${pais}`);
//         i++;
//     }
// }

// rankingArray(paisesMaisPopulosos);

// outra maneira

for (let pais of paisesMaisPopulosos){
        //console.log(pais)
    const indice = paisesMaisPopulosos.indexOf(pais)
        //console.log(indice)
    const frase = `${indice + 1}º país mais populoso do mundo - ${pais}`
console.log(frase)
}