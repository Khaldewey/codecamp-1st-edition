//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
let arr = gets().split(', ')
const list = {
  Reflorestamento: gets(),
  EsgotoTratado: gets(),
  EmissaoDeCarbono: gets(),
  EnergiaSustentavel: gets(),
}
const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);
iniciar();
function iniciar() {
  arr.forEach(entrada => {
    const item = findItem(list, entrada);

    switch (list[item]) {
      case 'Feito':
        print('Não multar');
        break;
      case 'Não feito':
        print('Multa');
        break;
      case 'Em progresso':
        print('Avaliação de progresso');
    };
  });
}