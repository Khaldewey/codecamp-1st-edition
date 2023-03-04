let distancia = parseInt(gets());

if (distancia > 10) {

  print(`O buraco deve retroceder ${retroceder(distancia)} metros`);
}

if (distancia < 10) {
  print(`O buraco deve avançar ${avancar(distancia)} metros`)
}

function retroceder(x) {
  return x - 10;
}

function avancar(y) {
  return 10 - y;
}