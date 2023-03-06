//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let lista1 = gets().split(', ');
let lista2 = gets().split(', ');
let lista3 = gets().split(', ')

let arr = [lista1, lista2, lista3]

let qualFiltro = false;
let qualMolecula;

//TODO: Print no console qual filtro deve ser utilizado de acordo com as moléculas prejudiciais
//avaliadas no teste. 

for (let x of arr) {
  for (let y of x) {
    if (y === "NO2" || y === "SO2" || y === "CO" || y === "FHO") {
      qualFiltro = true;
      qualMolecula = y;
    }

  }
}

if (qualFiltro === true) {
  print(`Filtro Específico para a Molécula ${qualMolecula}`);
} else {
  print(`Filtro Simples`);
}