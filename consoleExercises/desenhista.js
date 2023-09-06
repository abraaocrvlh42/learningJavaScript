function imprimirMatrizInterpolada(rows, cols) {
  for (let i = 0; i < rows; i++) {
    let linha = "";
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {
        linha += "0";
      } else {
        linha += "1";
      }
    }
    console.log(linha);
  }
}

// Defina o número de linhas e colunas desejado
const linhas = 4;
const colunas = 6;

// Chame a função para imprimir a matriz intercalada
imprimirMatrizInterpolada(linhas, colunas);