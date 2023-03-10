function tabuaDeMultiplicacao(){
    let numero = Number(prompt(`Digite um número para ver sua tabuada do 1 ao 10.`));
    for(let i in [...Array(10)]) {
      i = Number(i) + 1;
      resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  tabuaDeMultiplicacao();


// Outra maneira

// const multiplicando = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const numeroTabuada = Number(prompt(`Digite um número para ver sua tabuada do 1 ao 10.`))

// for(let i in multiplicando){
//     const resultado = numeroTabuada * multiplicando[i];
//     console.log(`${numeroTabuada} x ${Number(i) + 1} = ${resultado}`)
// }