function sequenciaPotenciaDe4(limite) {
  let numero = 1296;
  let potencia = 4;
  let termo = 2;

  while (numero <= limite) {
    console.log(numero);
    if (termo % 2 === 0) {
      numero /= potencia;
    } else {
      numero *= potencia;
    }
    termo++;
  }
}

const limite = 10000; // Defina o limite desejado aqui
sequenciaPotenciaDe4(limite);
