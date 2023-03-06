//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const arr = gets().split(', ')

let flag = false;
let flag1 = false;


for (let x of arr) {
  if (x.length > 10)
    flag = true;
  if (x.length > 5 && x.length <= 10)
    flag1 = true;
}

if (flag === true)
  print("O filtro deve ser: Filtro Duplo Específico");

if (flag === false && flag1 === true)
  print("O filtro deve ser: Filtro Específico");

if (flag === false && flag1 === false)
  print("O filtro deve ser: Filtro Normal");