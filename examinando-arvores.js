let amostra = gets().split(',');


iniciar();

function iniciar() {

  for (let i = 0; i < amostra.length; i++) {

    if (amostra[i] >= 75) {
      print("Descartar da lista");
    }

    if (amostra[i] >= 50 && amostra[i] < 75) {
      print("Manter sob observação");
    }

    if (amostra[i] < 50)
      print("Isolar e iniciar protocolo de cuidados")
  }


}