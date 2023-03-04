let plastico = parseInt(gets());
let diasNecessarios = 0;


print(`Serão necessários ${reduzirPlastico(plastico, diasNecessarios)} dias`);


function reduzirPlastico(x, y) {
  if (x / 2.0 > 1.0) {
    y++;
    do {
      x = x / 2.0;
      y++;
    }
    while (x / 2.0 > 1.0)
    return y;
  } else {
    return y;
  }

}