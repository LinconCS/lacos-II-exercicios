const jogadores = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]


for(let i = 0; i < jogadores.length; i++){
    let jogadorDaVez = jogadores[i]
    let mensagem = `Jogador ${i + 1}: `;
    // console.log(mensagem)
    for(let j = 0; j < jogadorDaVez.length; j++) {
        mensagem = mensagem + `Gols na temporada ${j + 1}: ${jogadorDaVez[j]} - `;
    }
    console.log(mensagem.slice(0, -3));
}


// Outra maneira

// for(let i = 0; i < jogadores.length; i++){
//     let frase = `Jogador ${i + 1}: `
//     for(let j = 0; j < jogadores[i].length; j++){
//         let gols = `${jogadores[i][j]},`
//         frase = frase + gols
//     }
//     console.log(frase.slice(0, -1))
// }


// Outra maneira II

// for(let i = 0; i < jogadores.length; i++){
//     const jogador = jogadores[i]
    
//     console.log(`Jogador ${i+1}: Gols por temporada ${jogador}` );

// }


// Maneira usando for in e for of

// for(let i in jogadores){
//     let jogadorDaVez = `Jogador ${Number(i) + 1}:`

//     for (let j of jogadores[i]){
//     jogadorDaVez = jogadorDaVez + ` ${j} `
//     }
//     console.log(jogadorDaVez)
// }